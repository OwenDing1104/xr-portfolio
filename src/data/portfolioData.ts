export type Profile = {
  name: string;
  title: string;
  location: string;
  email: string;
  wechat: string;
  photo: string;
  intro: string;
  tags: string[];
  about: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ProjectSection = {
  title: string;
  body: string[];
};

export type MediaItem = {
  label: string;
  kind: "image" | "gif" | "video" | "diagram";
  src?: string;
  alt?: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  timeline: string;
  summary: string;
  role: string;
  tags: string[];
  sections: ProjectSection[];
  media: MediaItem[];
};

// 网站主要文案都从这个文件读取。要改个人信息、技能、项目或素材路径，优先改这里。
export const profile: Profile = {
  name: "丁昌鸿 / Changhong Ding (Owen)",
  title: "XR Interaction Developer · User Researcher",
  location: "Ann Arbor, MI",
  email: "owending1104@gmail.com",
  wechat: "DCH13971687242",
  photo: "/assets/profile-photo.jpg",
  intro:
    "我关注 XR、游戏交互与用户研究，擅长将沉浸式体验从概念设计推进到可交互原型。我的项目覆盖文化遗产 VR、医疗教学 XR、VR 生存探索、历史空间复刻、实时环境反馈与 GenAI 辅助的注意力引导研究。",
  tags: [
    "Unity",
    "C#",
    "Meta XR SDK",
    "VR Interaction",
    "AR / DR",
    "User Research",
    "Cognitive Load",
    "Situation Awareness"
  ],
  about: [
    "我是一名关注 XR、游戏交互与用户研究的交互开发者，目前主要使用 Unity、C#、Meta XR SDK 与原型设计方法，构建面向真实学习、训练和体验场景的沉浸式系统。我的项目经验包括 VR 文化遗产体验、Apple Vision Pro 护理教学原型、VR 生存探索场景、泰坦尼克号历史空间复刻、Unity 环境反馈系统，以及围绕 GenAI 与 XR 注意力引导的学术研究。",
    "在这些项目中，我不仅关注系统能否被实现，也关注用户是否能够理解、学习并自然地使用它。因此，这个作品集重点展示三类能力：从真实问题出发设计 XR 交互体验，使用 Unity 与 XR 工具实现可运行原型，并通过用户研究方法评估体验的清晰度、有效性和可用性。"
  ]
};

export const skillGroups: SkillGroup[] = [
  {
    title: "XR 开发",
    items: [
      "Unity",
      "C#",
      "Meta XR SDK",
    ]
  },
  {
    title: "交互原型",
    items: [
      "Figma",
      "UI / UX Prototyping",
      "Game Interaction",
      "Feedback Design"
    ]
  },
  {
    title: "用户研究",
    items: [
      "User Study Design",
      "Qualitative Feedback",
      "Usability Evaluation"
    ]
  }
];

const projectData: Project[] = [
  {
    id: "genai-xr-thesis",
    title: "GenAI-XR 注意力引导研究",
    subtitle: "硕士论文：面向未来 AR 眼镜的研究型原型",
    timeline: "2025.09 – 至今",
    summary:
      "一个探索 Generative AI 与 XR 注意力引导结合的硕士论文项目，研究系统如何根据课堂画面与讲解内容生成 AR 高亮或 DR 弱化效果，帮助用户在信息密集场景中跟随重点并降低视觉搜索负担。",
    role:
      "负责研究问题定义、实验条件设计、AI 提示词与内容生成逻辑、XR 注意力提示原型设计，以及后续用户研究与评估规划。",
    tags: [
      "Generative AI",
      "XR Research",
      "AR Highlighting",
      "Diminished Reality",
      "Prompt Engineering",
      "User Study",
      "Attention Guidance"
    ],
    sections: [
      {
        title: "项目概述",
        body: [
          "这是我的硕士论文方向，聚焦 Generative AI 如何参与 XR 场景中的注意力引导。项目设想面向未来 AR 眼镜或混合现实学习场景：系统根据课堂画面、教师讲解和当前任务语境，生成 AR 高亮或 Diminished Reality 弱化效果，帮助用户在信息密集环境中跟随讲解重点。",
          "该项目目前处于论文研究与原型整理阶段，因此暂不展示公开素材。页面先保留项目位置，后续会补充原型截图、实验流程图或论文相关展示材料。"
        ]
      },
      {
        title: "研究目标",
        body: [
          "项目希望回答的问题是：当用户处在复杂视觉环境中时，AI 生成的 XR 视觉提示是否能够有效降低视觉搜索负担，并帮助用户更稳定地理解当前讲解重点。研究重点不只是生成视觉效果，而是让提示和学习任务、空间对象、用户注意力状态之间形成可解释的关系。"
        ]
      },
      {
        title: "我的职责",
        body: [
          "我负责该论文项目的研究问题定义、实验条件设计、AI 提示词与生成逻辑规划，以及 XR 注意力提示原型的交互设计。设计中会比较不同提示策略，例如直接 AR 高亮、降低非重点区域显著性的 DR 弱化，以及不使用智能提示的基线条件。",
          "同时，我会规划用户研究流程，包括任务设计、行为观察、主观反馈和认知负荷相关指标，用于评估这些提示策略是否真正改善理解、注意力分配和学习体验。"
        ]
      },
      {
        title: "实现挑战",
        body: [
          "这个项目的主要挑战在于把 AI 输出转化为稳定、可理解、不过度干扰的空间提示。课堂或学习场景中的重点经常随讲解内容变化，如果提示更新过慢会失去意义，如果提示过强又可能遮挡信息或制造额外认知负担。",
          "另一个挑战是评估方法。XR 注意力引导不能只看用户是否觉得效果新奇，还需要判断它是否真的帮助用户更快定位重点、更好理解内容，并且不会因为视觉提示过多而增加压力。"
        ]
      },
      {
        title: "当前状态",
        body: [
          "该项目作为硕士论文正在推进中，目前暂无可公开展示的图片或视频素材。后续会在论文进展允许的情况下补充原型界面、交互流程、实验设计和评估结果。"
        ]
      }
    ],
    media: [
      {
        label: "硕士论文项目暂无公开素材，敬请期待",
        kind: "image"
      }
    ]
  },
  {
    id: "vision-pro-nursing-xr",
    title: "Vision Pro 护理教学 XR 项目",
    subtitle: "面向远程护理课程的 Apple Vision Pro 教学体验",
    timeline: "2025.01 – 2025.05",
    summary:
      "一个面向护理学院远程教学场景的 Apple Vision Pro XR 项目，通过空间化场景、角色站位和三维标注功能，支持 Code Blue 抢救流程中的沟通与协作训练。",
    role:
      "参与交互原型开发，负责三维场景中的画笔标注功能设计与实现，并支持课后复盘和流程回顾体验。",
    tags: [
      "Apple Vision Pro",
      "XR Teaching",
      "Medical Training",
      "Code Blue",
      "Spatial Annotation",
      "Remote Learning",
      "Interaction Prototype"
    ],
    sections: [
      {
        title: "项目概述",
        body: [
          "该项目面向护理学院远程课程场景，基于 Apple Vision Pro 设计 XR 教学体验。项目聚焦 Code Blue 抢救中的沟通与协作训练，希望让学生在远程教学中更直观地理解医护角色、站位关系和流程协作。"
        ]
      },
      {
        title: "项目目标",
        body: [
          "项目围绕不同医护角色设计 4 个 Code Blue 医疗复苏情境，复刻人员站位、职责分工与交流流程。目标是通过沉浸式空间体验提升远程教学中的场景理解，让学习者不仅知道流程步骤，也能理解抢救现场中不同角色之间如何协作。"
        ]
      },
      {
        title: "我的职责",
        body: [
          "我参与交互原型开发，重点设计可在三维场景中直接标注的画笔功能。该功能用于支持教师或学习者在空间中标记关键位置、角色关系和流程节点，帮助课后复盘与流程回顾。",
          "在原型设计中，我关注标注动作是否容易理解、标注内容是否能贴合三维场景，以及复盘时这些标注是否能帮助用户快速回到关键教学点。"
        ]
      },
      {
        title: "设计与实现挑战",
        body: [
          "远程护理教学的难点在于，学生往往只能通过文字、视频或二维材料理解复杂的抢救协作流程，而 Code Blue 场景本身高度依赖空间站位、角色分工和实时沟通。因此，XR 原型需要把流程知识转化为空间化、可回看的教学体验。",
          "三维画笔标注功能的挑战在于标注既要足够自由，又不能干扰场景理解。标注需要贴合关键教学点，支持复盘，而不是变成额外的视觉负担。"
        ]
      },
      {
        title: "项目成果",
        body: [
          "该项目展示了我在 Apple Vision Pro 场景下进行 XR 教学体验设计、医疗训练流程理解和空间交互原型开发的经验。它补充了作品集中面向真实教学场景和专业训练场景的 XR 项目类型。"
        ]
      }
    ],
    media: [
      {
        label: "三维画笔展示图",
        kind: "image",
        src: "/assets/vision-pro-3d-brush.jpg",
        alt: "Vision Pro 护理教学 XR 项目中的三维画笔展示截图"
      },
      {
        label: "三维画笔短视频",
        kind: "video",
        src: "/assets/vision-pro-3d-brush-demo.mp4"
      },
      {
        label: "XR 教学展示图",
        kind: "image",
        src: "/assets/vision-pro-xr-teaching.jpg",
        alt: "Vision Pro 护理教学 XR 项目中的协作教学场景截图"
      },
      {
        label: "XR 教学展示视频",
        kind: "video",
        src: "/assets/vision-pro-xr-teaching-demo.mp4"
      },
    ]
  },
  {
    id: "sugarpaintvr",
    title: "SugarPaintVR",
    subtitle: "中国糖画文化遗产 VR 体验",
    timeline: "2025.06 – 至今",
    summary:
      "一个基于 Unity 的 VR 文化遗产体验，将中国传统糖画中的手部动作、工具倾斜和绘制反馈转化为可学习、可操作的沉浸式交互。",
    role:
      "负责 VR 交互逻辑、绘制机制调试，以及手部动作到糖画笔触反馈之间的映射优化。",
    tags: [
      "Unity",
      "C#",
      "VR Interaction",
      "Object Grabbing",
      "Dynamic Line Rendering",
      "Real-time Feedback"
    ],
    sections: [
      {
        title: "项目概述",
        body: [
          "SugarPaintVR 是一个基于 Unity 开发的 VR 体验项目，目标是将中国传统糖画这一非物质文化遗产转化为可交互、可学习的沉浸式体验。糖画在现实中依赖手部动作、勺子倾斜角度、糖液流速和绘制节奏。这个项目的核心挑战不是简单地把糖画放进 VR，而是把真实糖画中的手部控制和材料反馈转译为虚拟环境中的交互规则。"
        ]
      },
      {
        title: "项目目标",
        body: [
          "项目希望让用户在 VR 中通过身体动作理解糖画制作过程，而不是只观看一个展示动画。用户需要拿起虚拟工具，在空间中控制勺子的姿态，并通过自己的移动生成糖画线条。这个过程强调身体参与和动作学习，让用户通过操作来理解传统工艺。"
        ]
      },
      {
        title: "我的职责",
        body: [
          "我主要负责 VR 交互设计与 Unity 原型开发，参与交互逻辑设计、绘制机制调试、手部动作与糖画轨迹之间的映射优化，以及用户体验层面的迭代判断。",
          "具体工作包括设计虚拟勺子与绘制表面的交互逻辑，调整勺子倾斜角度、接触条件和绘制触发规则，优化绘制平面和笔触稳定性，并参与体验测试与问题排查。"
        ]
      },
      {
        title: "设计与实现挑战",
        body: [
          "这个项目中最重要的挑战是平衡真实感和易用性。如果系统过于真实，初次使用 VR 的用户可能很难成功画出图案；但如果系统过于自动化，用户又会觉得自己只是触发了一个效果，而不是在真正进行糖画创作。",
          "因此，交互设计需要关注动作和结果之间的因果关系。用户改变勺子角度时，系统应该给出合理反馈；用户移动手部时，糖画线条应该跟随动作变化；用户操作不准确时，系统也应该让他们感受到为什么没有成功。"
        ]
      },
      {
        title: "项目成果",
        body: [
          "SugarPaintVR 展示了我将文化内容、身体交互和 Unity 技术结合起来的能力。它不仅是一个 VR 展示项目，也是一种关于传统工艺数字化学习的探索。通过这个项目，我积累了 VR 交互原型、运动映射、实时反馈设计和沉浸式教育体验方面的经验。"
        ]
      }
    ],
    media: [
      {
        label: "绘制糖画过程截图",
        kind: "image",
        src: "/assets/sugar-painting-process.png",
        alt: "SugarPaintVR 中用户进行糖画绘制时的第一视角截图"
      },
      {
        label: "SugarPaintVR 演示视频",
        kind: "video",
        src: "/assets/sugar-painting-demo.mp4"
      },
      {
        label: "最终糖画结果图",
        kind: "image",
        src: "/assets/sugar-painting-assembled.jpg",
        alt: "SugarPaintVR 中糖画绘制完成并拼装后的第一视角截图"
      },
    ]
  },
  {
    id: "vr-island-survival",
    title: "孤岛求生 VR 体验",
    subtitle: "Unity VR 生存探索课程项目",
    timeline: "2025.01 – 2025.05",
    summary:
      "一个基于 Unity 的 VR 生存探索课程项目，以孤岛环境为主题，练习空间导航、物体拾取、资源交互和环境反馈设计。",
    role:
      "负责场景搭建、基础交互逻辑、可交互物体反馈和体验流程调试。",
    tags: [
      "Unity",
      "C#",
      "VR Interaction",
      "Object Grabbing",
      "Environment Design",
      "Navigation",
      "Interaction Feedback"
    ],
    sections: [
      {
        title: "项目概述",
        body: [
          "孤岛求生是一个 VR 课程个人项目，场景围绕孤岛环境中的探索和生存任务展开。项目重点是通过场景设计、可交互物体和清晰反馈，让用户能够在 VR 中理解自己当前的位置、目标和可执行动作。"
        ]
      },
      {
        title: "项目目标",
        body: [
          "项目目标是设计一个可探索的 VR 孤岛体验。用户需要在孤岛环境中移动、观察、寻找资源，并通过手柄与物体互动。这个项目强调场景尺度、交互提示和反馈节奏，让用户不依赖额外说明也能理解体验流程。"
        ]
      },
      {
        title: "我的职责",
        body: [
          "我负责 Unity 场景搭建、基础 VR 交互逻辑、可交互物体设置和体验流程调试。主要工作包括组织孤岛场景中的关键空间节点，配置可拾取或可触发物体，调整碰撞体和手柄输入，并为用户操作设计明确的视觉反馈。",
          "在实现过程中，我重点关注用户能否自然理解哪些物体可交互、当前目标在哪里，以及操作成功后系统是否给出足够清晰但不过度的反馈。"
        ]
      },
      {
        title: "设计与实现挑战",
        body: [
          "孤岛场景的挑战在于空间较开放，用户容易迷失方向，交互目标也容易被环境细节淹没。因此，场景需要通过地形结构、显著物体和反馈线索建立清晰的可操作感。",
          "另一个挑战是交互反馈的稳定性。用户在 VR 中尝试拾取、靠近或触发物体时，系统需要及时回应，让用户确认自己的动作有效，同时避免反馈过强导致体验显得像提示界面而不是沉浸式场景。"
        ]
      },
      {
        title: "项目成果",
        body: [
          "这个项目展示了我在 Unity VR 场景组织、基础交互实现和体验流程调试方面的能力。它适合作为作品集中说明 VR 场景搭建和交互基础的项目，也为后续更复杂的沉浸式原型打下了技术基础。"
        ]
      }
    ],
    media: [
      {
        label: "孤岛整体环境截图",
        kind: "image",
        src: "/assets/island-environment.jpg",
        alt: "孤岛求生 VR 场景中的夜晚营地环境截图"
      },
      {
        label: "VR 体验演示视频",
        kind: "video",
        src: "/assets/island-survival-demo.mp4"
      }
    ]
  },
  {
    id: "vr-fire-feedback",
    title: "VR 水流灭火反馈原型",
    subtitle: "基于 Unity 的水流、火焰与烟雾反馈系统",
    timeline: "2026.01 – 2026.05",
    summary:
      "一个基于 Unity 的 VR 环境反馈原型，用户可以使用水流与火焰互动，系统根据命中位置实时生成水花、烟雾和火焰变化。",
    role:
      "负责粒子系统、碰撞检测、命中反馈逻辑和视觉效果调试。",
    tags: [
      "Unity",
      "C#",
      "Particle System",
      "Collision Detection",
      "VR Controller Input",
      "Environmental Interaction"
    ],
    sections: [
      {
        title: "项目概述",
        body: [
          "该项目是一个 Unity VR 交互原型，重点探索用户动作如何触发环境中的实时反馈。示例场景是用户在 VR 中使用水流或水枪对火焰进行灭火，系统根据水流与火焰的接触产生水花、烟雾和火焰变化。"
        ]
      },
      {
        title: "项目目标",
        body: [
          "项目目标是让用户体验消防员的角色，并通过实时环境反馈理解自己的操作结果。对于灭火场景，用户需要看到自己瞄准的位置、水流接触火焰的位置，以及火焰和烟雾如何随着操作发生变化。"
        ]
      },
      {
        title: "我的职责",
        body: [
          "我负责 Unity 交互原型的实现和调试，重点包括水流粒子效果、碰撞检测、命中反馈、水花效果、火焰变化和烟雾表现的参数调整。",
          "具体工作包括使用 Unity 粒子系统制作水流、水花、火焰和烟雾效果，调整粒子发射、生命周期、碰撞反馈和视觉表现，设计水流命中火焰后的反馈逻辑，并调试效果触发位置、持续时间和视觉强度。"
        ]
      },
      {
        title: "设计与实现挑战",
        body: [
          "该项目的关键挑战是让环境反馈看起来既明确又自然。如果水花或烟雾太弱，用户可能无法感受到自己的动作有效；如果效果太强，又会显得不真实甚至遮挡视野。因此需要不断调整粒子效果和交互触发逻辑，使反馈支持用户理解，而不是只追求视觉冲击。"
        ]
      },
      {
        title: "项目成果",
        body: [
          "该原型展示了我对 VR 环境反馈、实时交互和 Unity 特效系统的理解。它适合用于说明我能够独立实现和调试具体的 VR 交互机制，也能根据用户体验目标调整技术参数。"
        ]
      }
    ],
    media: [
      {
        label: "场景以及水流发射截图",
        kind: "image",
        src: "/assets/firefighter-water-stream.png",
        alt: "VR 水流灭火原型中的水流发射截图"
      },
      {
        label: "灭火过程短视频",
        kind: "video",
        src: "/assets/firefighter-demo.mp4"
      },
    ]
  },
  {
    id: "vr-titanic-recreation",
    title: "泰坦尼克号历史空间复刻",
    subtitle: "Unity VR 场景复刻课程项目",
    timeline: "2025.01 – 2025.05",
    summary:
      "一个基于 Unity 的 VR 历史空间复刻课程项目，围绕泰坦尼克号相关参考资料进行场景建模、尺度组织、灯光氛围和沉浸式漫游体验设计。",
    role:
      "负责场景复刻、空间比例整理、灯光与氛围调试，以及 VR 漫游体验检查。",
    tags: [
      "Unity",
      "C#",
      "VR Environment",
      "Scene Recreation",
      "Lighting",
      "Scale Reference",
      "Historical Space"
    ],
    sections: [
      {
        title: "项目概述",
        body: [
          "泰坦尼克号历史空间复刻是一个 Unity VR 课程项目，目标是将泰坦尼克号相关空间转化为可以在 VR 中浏览和体验的场景。项目重点放在空间比例、场景氛围、历史感表达和 VR 漫游体验上。"
        ]
      },
      {
        title: "项目目标",
        body: [
          "项目希望通过 VR 复刻让用户获得一种置身历史空间的感受，而不是只观看平面图片或普通 3D 模型。用户需要能够在场景中移动、观察空间细节，并通过尺度、材质和灯光理解场景所表达的历史氛围。"
        ]
      },
      {
        title: "我的职责",
        body: [
          "我负责场景复刻与 VR 漫游体验相关工作，包括整理空间参考、搭建主要场景结构、调整比例关系、配置灯光和氛围，并检查用户在 VR 中移动和观察时的舒适度。",
          "实现过程中，我关注场景是否能被用户自然阅读：哪些区域是主要观看点，空间尺度是否可信，灯光是否支持氛围表达，以及用户在漫游时是否能够保持方向感。"
        ]
      },
      {
        title: "设计与实现挑战",
        body: [
          "历史场景复刻的挑战在于既要让空间看起来具有辨识度，又要保证 VR 中的尺度和移动体验合理。如果比例过小或路径不清晰，用户会很难相信自己处在一个真实空间中。",
          "另一个挑战是氛围控制。灯光、材质和空间密度需要服务于场景叙事，而不是堆叠细节。项目中需要在表现历史感和保持实时渲染流畅之间做取舍。"
        ]
      },
      {
        title: "项目成果",
        body: [
          "这个项目展示了我在 Unity VR 场景复刻、空间组织、灯光氛围和漫游体验检查方面的能力。它能够补充作品集中偏场景设计和沉浸式空间表达的一面。"
        ]
      }
    ],
    media: [
      {
        label: "泰坦尼克号场景复刻照片",
        kind: "image",
        src: "/assets/titanic-scene.png",
        alt: "Unity 中复刻的泰坦尼克号场景截图"
      },
      {
        label: "VR 漫游演示视频",
        kind: "video",
        src: "/assets/titanic-demo.mp4"
      },
    ]
  }
];

const projectStartValue = (timeline: string) => {
  const match = timeline.match(/^(\d{4})\.(\d{2})/);
  if (!match) {
    return 0;
  }

  return Number(match[1]) * 100 + Number(match[2]);
};

export const projects: Project[] = [...projectData].sort(
  (a, b) => projectStartValue(b.timeline) - projectStartValue(a.timeline)
);