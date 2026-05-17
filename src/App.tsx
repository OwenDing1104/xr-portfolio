import { useEffect, useMemo, useRef, useState } from "react";
import {
  profile,
  projects,
  skillGroups,
  type Project
} from "./data/portfolioData";

function App() {
  const [openProjectId, setOpenProjectId] = useState("");
  const [activeSection, setActiveSection] = useState("top");
  const shouldScrollToProjectRef = useRef(false);

  const openProject = useMemo(
    () => projects.find((project) => project.id === openProjectId),
    [openProjectId]
  );

  const scrollToProjectDetail = (projectId: string) => {
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(`${projectId}-detail`)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });

    return () => window.cancelAnimationFrame(frame);
  };

  useEffect(() => {
    if (!openProjectId || !shouldScrollToProjectRef.current) {
      return;
    }

    shouldScrollToProjectRef.current = false;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(`${openProjectId}-detail`)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [openProjectId]);

  useEffect(() => {
    const observedSections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.08, 0.2, 0.5]
      }
    );

    observedSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleToggleProject = (projectId: string) => {
    const nextProjectId = openProjectId === projectId ? "" : projectId;
    shouldScrollToProjectRef.current = Boolean(nextProjectId);
    setOpenProjectId(nextProjectId);
  };

  const handleSelectProject = (projectId: string) => {
    if (openProjectId === projectId) {
      scrollToProjectDetail(projectId);
      return;
    }

    shouldScrollToProjectRef.current = true;
    setOpenProjectId(projectId);
  };

  return (
    <div className="site-shell">
      <SideNav
        activeSection={activeSection}
        openProjectId={openProjectId}
        onSelectProject={handleSelectProject}
      />
      <main className="page-content">
        <Hero />
        <About />
        <Skills />
        <Projects
          openProject={openProject}
          openProjectId={openProjectId}
          onToggleProject={handleToggleProject}
        />
        <Contact />
      </main>
    </div>
  );
}

const navItems = [
  { id: "top", label: "首页" },
  { id: "about", label: "个人简介" },
  { id: "skills", label: "技能" },
  { id: "projects", label: "项目" },
  { id: "contact", label: "联系" }
];

function SideNav({
  activeSection,
  openProjectId,
  onSelectProject
}: {
  activeSection: string;
  openProjectId: string;
  onSelectProject: (projectId: string) => void;
}) {
  return (
    <aside className="side-nav" aria-label="页面目录">
      <a className="brand" href="#top" aria-label="返回首页">
        丁昌鸿
      </a>
      <nav className="nav-links" aria-label="主导航">
        {navItems.map((item) => (
          <div className="nav-group" key={item.id}>
            <a
              className={activeSection === item.id ? "active" : ""}
              href={`#${item.id}`}
            >
              {item.label}
            </a>
            {item.id === "projects" ? (
              <div className="project-subnav" aria-label="项目子目录">
                {projects.map((project) => (
                  <a
                    className={openProjectId === project.id ? "active" : ""}
                    href={`#${project.id}-detail`}
                    key={project.id}
                    onClick={(event) => {
                      event.preventDefault();
                      onSelectProject(project.id);
                    }}
                  >
                    {project.title}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </nav>
    </aside>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <h1>{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions" aria-label="主要操作">
          <a className="button button-primary" href="#projects">
            查看项目
          </a>
          <a className="button button-secondary" href="#contact">
            联系我
          </a>
        </div>
      </div>

      <aside className="profile-panel" aria-label="个人信息">
        <dl>
          <div>
            <dt>方向</dt>
            <dd>{profile.title}</dd>
          </div>
          <div>
            <dt>定位</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>邮箱</dt>
            <dd>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </dd>
          </div>
        </dl>
      </aside>

      <div className="tag-row hero-tags" aria-label="核心关键词">
        {profile.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="content-section" id="about">
      <div className="section-heading">
        <h2>个人简介</h2>
      </div>
      <div className="text-panel">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="content-section" id="skills">
      <div className="section-heading">
        <h2>技能概览</h2>
      </div>
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

type ProjectsProps = {
  openProject: Project | undefined;
  openProjectId: string;
  onToggleProject: (projectId: string) => void;
};

function Projects({ openProject, openProjectId, onToggleProject }: ProjectsProps) {
  return (
    <section className="content-section" id="projects">
      <div className="section-heading section-heading-wide">
        <h2>项目展示</h2>
        <p>
          每个项目都展示一个明确的 XR 问题、我的职责、实现挑战和后续可补充的素材位置。
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => {
          const isOpen = openProjectId === project.id;

          return (
            <article className={`project-card${isOpen ? " project-card-open" : ""}`} key={project.id}>
              <div className="project-card-body">
                <div>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-timeline">{project.timeline}</p>
                </div>
                <p>{project.summary}</p>
                <p className="project-role">{project.role}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                className="project-toggle"
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${project.id}-detail`}
                onClick={() => onToggleProject(project.id)}
              >
                {isOpen ? "收起详情" : "展开详情"}
              </button>
            </article>
          );
        })}
      </div>

      {openProject ? <ProjectDetail project={openProject} /> : null}
    </section>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const activeMedia = project.media[activeMediaIndex] ?? project.media[0];

  useEffect(() => {
    setActiveMediaIndex(0);
  }, [project.id]);

  return (
    <article className="project-detail" id={`${project.id}-detail`}>
      <div className="project-detail-header">
        <div>
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p>
          <span className="project-detail-timeline">{project.timeline}</span>
        </div>
        <div className="tag-row detail-tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="detail-copy">
        {project.sections.map((section) => (
          <section className="detail-section" key={section.title}>
            <h4>{section.title}</h4>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>

      <section className="media-panel" aria-label={`${project.title} 可展示素材`}>
        <div className="media-panel-header">
          <h4>可展示素材</h4>
          {activeMedia ? <span>{activeMedia.label}</span> : null}
        </div>

        {activeMedia ? (
          <div className="media-stage">
            {activeMedia.src && activeMedia.kind === "video" ? (
              <video
                className="media-asset"
                controls
                preload="metadata"
                src={activeMedia.src}
                aria-label={activeMedia.label}
              />
            ) : null}
            {activeMedia.src && activeMedia.kind !== "video" ? (
              <img
                className="media-asset"
                src={activeMedia.src}
                alt={activeMedia.alt ?? activeMedia.label}
              />
            ) : null}
            {!activeMedia.src ? (
              <div className="media-placeholder">
                <span>
                  {activeMedia.label}
                  <b>{mediaKindLabel[activeMedia.kind]}</b>
                </span>
              </div>
            ) : null}
          </div>
        ) : null}

        <div className="media-switcher" aria-label="切换项目素材">
          {project.media.map((item, index) => (
            <button
              className={index === activeMediaIndex ? "active" : ""}
              key={item.label}
              type="button"
              onClick={() => setActiveMediaIndex(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </button>
          ))}
        </div>
      </section>
    </article>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div>
        <h2>联系我</h2>
        <p>
          如果你对我的 VR / XR 项目、Unity 原型开发、游戏交互设计或用户研究经历感兴趣，欢迎联系我。
        </p>
      </div>
      <a className="button button-primary" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
    </section>
  );
}

const mediaKindLabel = {
  image: "图片",
  gif: "GIF",
  video: "视频",
  diagram: "流程图"
};

export default App;
