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

  const handleCloseProject = () => {
    shouldScrollToProjectRef.current = false;
    setOpenProjectId("");

    window.requestAnimationFrame(() => {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
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
          onCloseProject={handleCloseProject}
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
          <div>
            <dt>微信</dt>
            <dd>{profile.wechat}</dd>
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
  onCloseProject: () => void;
  onToggleProject: (projectId: string) => void;
};

function Projects({
  openProject,
  openProjectId,
  onCloseProject,
  onToggleProject
}: ProjectsProps) {
  return (
    <section className="content-section" id="projects">
      <div className="section-heading section-heading-wide">
        <h2>项目展示</h2>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => {
          const isOpen = openProjectId === project.id;
          const visibleTags = project.tags.slice(0, 3);

          return (
            <article
              aria-controls={`${project.id}-detail`}
              aria-expanded={isOpen}
              className={`project-card project-card-interactive${isOpen ? " project-card-open" : ""}`}
              key={project.id}
              onClick={() => onToggleProject(project.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onToggleProject(project.id);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div className="project-card-body">
                <div className="project-card-topline">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.timeline}</span>
                </div>
                <div>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                <p>{project.summary}</p>
                <div className="tag-row">
                  {visibleTags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > visibleTags.length ? (
                    <span className="tag tag-count">
                      +{project.tags.length - visibleTags.length}
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="project-card-footer">
                <span>{isOpen ? "当前展开" : "查看详情"}</span>
              </div>
            </article>
          );
        })}
      </div>

      {openProject ? (
        <ProjectDetail onClose={onCloseProject} project={openProject} />
      ) : null}
    </section>
  );
}

function ProjectDetail({
  onClose,
  project
}: {
  onClose: () => void;
  project: Project;
}) {
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

      <div className="project-detail-actions">
        <button className="project-collapse" type="button" onClick={onClose}>
          收起详情
        </button>
      </div>
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
      <div className="contact-actions" aria-label="联系方式">
        <a className="button button-primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <span className="contact-wechat">
          <span>微信</span>
          {profile.wechat}
        </span>
      </div>
    </section>
  );
}

const mediaKindLabel = {
  image: "后续补充",
  gif: "GIF",
  video: "视频",
  diagram: "流程图"
};

export default App;
