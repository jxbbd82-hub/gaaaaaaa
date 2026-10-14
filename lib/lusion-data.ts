export interface ProjectMediaItem {
  type: "image" | "video" | "text"
  src?: string
  content?: string
  width?: number
  height?: number
  fullscreen?: boolean
}

export interface ProjectLink {
  label: string
  url: string
}

export interface LusionProject {
  id: string
  title: string
  tags: string
  featured: boolean
  thumb: string
  paragraphs: string[]
  ctaUrl: string
  colorBg: string
  colorHighlight: string
  colorBtnBg: string
  colorBtnText: string
  colorText: string
  services: string[]
  links: ProjectLink[]
  items: ProjectMediaItem[]
  nextId: string
}

export interface TeamMember {
  id: string
  number: string
  name: string
  role: string
  letter: string
}

export const TEAM_MEMBERS: TeamMember[] = [
  { id: "edan", number: "001", name: "Edan Kwan", role: "Cofounder &\nCreative Director", letter: "E" },
  { id: "ffi", number: "002", name: "Ffion Morgan", role: "Cofounder &\nHead of Operation", letter: "F" },
  { id: "pierre", number: "003", name: "Pierre Nottin", role: "Creative Developer", letter: "P" },
  { id: "yannic", number: "004", name: "Yannic Laurenz", role: "Creative Developer", letter: "Y" },
  { id: "paul", number: "005", name: "Paul Catoera", role: "3D Motion Designer", letter: "P" },
  { id: "andrii", number: "006", name: "Andrii Ovsiannikov", role: "Art Director", letter: "A" },
  { id: "sunny", number: "007", name: "Sunny", role: "Executive Purr-ducer", letter: "S" },
]

export const CLIENT_LOGOS = {
  row1: [
    { name: "Coca-Cola", src: "https://lusion.co/assets/images/logo/@logo--cocacola.svg" },
    { name: "Max Mara", src: "https://lusion.co/assets/images/logo/@logo--maxmara.svg" },
    { name: "Calvin Klein", src: "https://lusion.co/assets/images/logo/@logo--calvin-klein.svg" },
    { name: "Porsche", src: "https://lusion.co/assets/images/logo/@logo--porsche.svg" },
    { name: "Wallpaper*", src: "https://lusion.co/assets/images/logo/@logo--wallpaper.svg" },
  ],
  row2: [
    { name: "Hyundai", src: "https://lusion.co/assets/images/logo/@logo--hyundai.svg" },
    { name: "Google", src: "https://lusion.co/assets/images/logo/@logo--google.svg" },
    { name: "Apple", src: "https://lusion.co/assets/images/logo/@logo--apple.svg" },
    { name: "Webby Awards", src: "https://lusion.co/assets/images/logo/@logo--webby-awards.svg" },
    { name: "Stanford", src: "https://lusion.co/assets/images/logo/@logo--stanford.svg" },
    { name: "Sony", src: "https://lusion.co/assets/images/logo/@logo--sony.svg" },
  ],
  row3: [
    { name: "Awwwards", src: "https://lusion.co/assets/images/logo/@logo--awwwards.svg" },
    { name: "NVIDIA", src: "https://lusion.co/assets/images/logo/@logo--nvidia.svg" },
    { name: "AKQA", src: "https://lusion.co/assets/images/logo/@logo--akqa.svg" },
    { name: "Nexus Studios", src: "https://lusion.co/assets/images/logo/@logo--nexus-studios.svg" },
    { name: "Coca-Cola", src: "https://lusion.co/assets/images/logo/@logo--cocacola.svg" },
  ],
}

export const AWARDS_LIST = [
  {
    org: "Awwwards",
    items: [
      { count: "001", title: "Site of the Year" },
      { count: "001", title: "Developer Site of the Year" },
      { count: "001", title: "Site of the Month" },
      { count: "010", title: "Site of the Day" },
      { count: "016", title: "Honorable Mention" },
    ],
  },
  {
    org: "FWA",
    items: [
      { count: "001", title: "Site of the Year" },
      { count: "002", title: "Site of the Month" },
      { count: "017", title: "Site of the Day" },
    ],
  },
  {
    org: "CSSDA",
    items: [
      { count: "001", title: "Site of the Year" },
      { count: "001", title: "Agency Site of the Year" },
    ],
  },
  {
    org: "Webby Awards",
    items: [
      { count: "002", title: "Webby Winner" },
      { count: "002", title: "Webby Nominee" },
    ],
  },
  {
    org: "Lovie Awards",
    items: [{ count: "001", title: "Lovie Winner" }],
  },
  {
    org: "Drum Awards",
    items: [{ count: "001", title: "The Drum Awards for Design" }],
  },
  {
    org: "CommArts",
    items: [{ count: "001", title: "Best-in-show Interactive" }],
  },
]

export const ARTICLES_LIST = [
  {
    title: "Porsche Newsroom - Driven By Dream",
    url: "https://newsroom.porsche.com/en_US/2023/company/porsche-great-britain-wallpaper-lusion-short-film-ferry-porsche-356-london-driven-by-dreams-30982.html",
  },
  {
    title: "Wallpaper - Driven by Dreams",
    url: "https://www.wallpaper.com/art/porsche-driven-by-dreams",
  },
  {
    title: "Opera North - The Turn of the Screw",
    url: "https://www.operanorth.co.uk/news/cutting-edge-creeps-with-new-trailer-for-the-turn-of-the-screw/",
  },
]

export const TALKS_LIST = [
  { event: "Digital Design Days", date: "Oct 2024 Milan" },
  { event: "Awwwards Conf", date: "Oct 2023 Amsterdam" },
  { event: "KIKK Festival", date: "Oct 2023 Namur" },
  { event: "Awwwards Conf", date: "Oct 2022 Amsterdam" },
  { event: "Grow Paris", date: "Nov 2018 Paris" },
]

export const CAPABILITY_CARDS = [
  {
    title: "Strategy",
    badge: "s",
    topBadge: "s",
    color: "#1a2ffb",
    items: [
      "Digital Experience Strategy",
      "Technology Strategy",
      "Creative Direction",
      "Discovery",
      "Research",
    ],
  },
  {
    title: "Creative",
    badge: "c",
    topBadge: "d",
    color: "#8832f7",
    items: [
      "Art Direction",
      "UX/UI Design",
      "Motion Design",
      "Interactive Design",
      "Illustration",
    ],
  },
  {
    title: "Tech",
    badge: "t",
    topBadge: "t",
    color: "#c1ff00",
    items: [
      "WebGL Development",
      "Front End Development",
      "Unity/Unreal",
      "Interactive Installations",
      "AR and VR Experiences",
    ],
  },
  {
    title: "Production",
    badge: "P",
    topBadge: "3",
    color: "#ff4c41",
    items: [
      "Procedural Modeling",
      "3D Asset Creation",
      "3D Optimization",
      "Animation",
      "3D Pipeline Development",
    ],
  },
]

export const LUSION_PROJECTS: LusionProject[] = [
  {
    "id": "oryzo_ai",
    "title": "Oryzo AI",
    "tags": "concept \u2022 web \u2022 design \u2022 development \u2022 3d \u2022 animation",
    "featured": true,
    "thumb": "https://lusion.co/assets/projects/oryzo_ai/home.webp",
    "paragraphs": [
      "Oryzo AI is a self initiated project by Lusion built around a deliberately ridiculous idea: presenting a simple cork coaster as a serious AI era product launch. We treated it as a full campaign, combining premium visual production with satire to see how far craft, storytelling, and presentation could push an ordinary object.",
      "Beyond the main website, we extended the idea across a GitHub page, Product Hunt launch, founder video, and social content. It gave us room to experiment more freely with tone and campaign thinking, while showing the same level of design, motion, and digital production we bring to client work."
    ],
    "ctaUrl": "https://oryzo.ai/",
    "colorBg": "#1a1411",
    "colorHighlight": "#dc5000",
    "colorBtnBg": "#ffedd7",
    "colorBtnText": "#192743",
    "colorText": "#ffedd7",
    "services": [
      "Concept",
      "Web Design",
      "Web Development",
      "3D Design",
      "WebGL",
      "Animation"
    ],
    "links": [
      {
        "label": "FWA SOTM",
        "url": "https://thefwa.com/cases/oryzo-ai"
      },
      {
        "label": "Awwwards SOTM",
        "url": "https://www.awwwards.com/sites/oryzo-ai"
      },
      {
        "label": "Product Hunt",
        "url": "https://www.producthunt.com/products/oryzo-ai"
      },
      {
        "label": "Github",
        "url": "https://github.com/lusionltd/ORYZO-1"
      },
      {
        "label": "Launch Project",
        "url": "https://oryzo.ai/"
      }
    ],
    "items": [
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/oryzo_ai/main.mp4",
        "width": 1250,
        "height": 720,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/oryzo_ai/image_1.webp",
        "width": 1296,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/oryzo_ai/launch.mp4",
        "width": 1280,
        "height": 720,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/oryzo_ai/image_2.webp",
        "width": 1080,
        "height": 1440,
        "fullscreen": true
      },
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/oryzo_ai/bts.mp4",
        "width": 1280,
        "height": 720,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/oryzo_ai/founder.webp",
        "width": 2043,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/oryzo_ai/image_3.webp",
        "width": 1296,
        "height": 1620,
        "fullscreen": true
      }
    ],
    "nextId": "atlas_motion"
  },
  {
    "id": "atlas_motion",
    "title": "Atlas Motion",
    "tags": "concept \u2022 web \u2022 design \u2022 development \u2022 3d \u2022 animation",
    "featured": true,
    "thumb": "https://lusion.co/assets/projects/atlas_motion/home.webp",
    "paragraphs": [
      "Atlas is building next generation motion systems for drones, robotics, and autonomous hardware. We worked with the team to create a focused digital experience that turns a complex manufacturing story into something clear, confident, and tangible. The site introduces Atlas\u2019 joint development model, brings their product and factory story to the surface, and uses precise motion, visual pacing, and selective WebGL to communicate the scale of their ambition without losing the seriousness of the category."
    ],
    "ctaUrl": "https://atlasmotion.com/",
    "colorBg": "#181818",
    "colorHighlight": "#F65893",
    "colorBtnBg": "#FFFDE0",
    "colorBtnText": "#192743",
    "colorText": "#FFFDE0",
    "services": [
      "Concept",
      "Web Design",
      "Web Development",
      "3D Design",
      "WebGL",
      "Animation"
    ],
    "links": [
      {
        "label": "Launch Project",
        "url": "https://atlasmotion.com/"
      }
    ],
    "items": [
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/atlas_motion/main.mp4",
        "width": 1234,
        "height": 720,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/atlas_motion/1.webp",
        "width": 1820,
        "height": 1024,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/atlas_motion/2.webp",
        "width": 1820,
        "height": 1024,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/atlas_motion/3.webp",
        "width": 1820,
        "height": 1024,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/atlas_motion/4.webp",
        "width": 1820,
        "height": 1024,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/atlas_motion/5.webp",
        "width": 1820,
        "height": 1024,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/atlas_motion/6.webp",
        "width": 1820,
        "height": 1024,
        "fullscreen": false
      }
    ],
    "nextId": "devin_ai"
  },
  {
    "id": "devin_ai",
    "title": "Devin AI",
    "tags": "web \u2022 design \u2022 development \u2022 3d",
    "featured": true,
    "thumb": "https://lusion.co/assets/projects/devin_ai/home.webp",
    "paragraphs": [
      "We partnered with Cognition AI to create a modern website for Devin, their AI software engineer. The challenge was to communicate a complex AI product in a way that felt clear, sleek, and accessible.",
      "Through subtle storytelling, animation, and interactive design, we introduced Devin\u2019s features in a more engaging way and created a polished experience that felt both advanced and approachable."
    ],
    "ctaUrl": "https://archive-devin-ai.lusion.co/",
    "colorBg": "#121414",
    "colorHighlight": "#64e1ce",
    "colorBtnBg": "#ffffff",
    "colorBtnText": "#192743",
    "colorText": "#ffffff",
    "services": [
      "Concept",
      "Web Design",
      "Web Development",
      "3D Design",
      "WebGL"
    ],
    "links": [
      {
        "label": "Launch Project",
        "url": "https://archive-devin-ai.lusion.co/"
      }
    ],
    "items": [
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/devin_ai/video0.mp4",
        "width": 1920,
        "height": 1080,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/devin_ai/image1.webp",
        "width": 1920,
        "height": 1080,
        "fullscreen": false
      },
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/devin_ai/video2.mp4",
        "width": 1080,
        "height": 1080,
        "fullscreen": true
      },
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/devin_ai/video3.mp4",
        "width": 1920,
        "height": 1080,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/devin_ai/image4.webp",
        "width": 1920,
        "height": 1080,
        "fullscreen": false
      }
    ],
    "nextId": "of_the_oak"
  },
  {
    "id": "of_the_oak",
    "title": "Of The Oak",
    "tags": "web \u2022 design \u2022 development \u2022 3d \u2022 animation",
    "featured": true,
    "thumb": "https://lusion.co/assets/projects/of_the_oak/home.webp",
    "paragraphs": [
      "MLF approached us to create a web companion for Of The Oak, their physical installation created in collaboration with Royal Botanic Gardens, Kew. Designed to extend the project beyond the installation itself, the experience gave onsite visitors a more interactive way to engage with the work while also making it accessible to online audiences.",
      "The website helped bridge the physical and digital experience, offering a space for visitors to explore the project in greater depth and learn more about its story, ideas, and context."
    ],
    "ctaUrl": "https://oftheoak.co.uk/",
    "colorBg": "#111a13",
    "colorHighlight": "#00ab20",
    "colorBtnBg": "#d9f3de",
    "colorBtnText": "#192743",
    "colorText": "#d9f3de",
    "services": [
      "Web Design",
      "Web Development",
      "3D Design",
      "WebGL",
      "Animation"
    ],
    "links": [
      {
        "label": "blooloop",
        "url": "https://blooloop.com/of-the-oak/"
      },
      {
        "label": "Launch Project",
        "url": "https://oftheoak.co.uk/"
      }
    ],
    "items": [
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/of_the_oak/video0.mp4",
        "width": 1920,
        "height": 1080,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/of_the_oak/species.webp",
        "width": 2025,
        "height": 1080,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/of_the_oak/meditation.webp",
        "width": 2025,
        "height": 1080,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/of_the_oak/making_of_artwork.webp",
        "width": 2025,
        "height": 1080,
        "fullscreen": false
      },
      {
        "type": "text",
        "content": "We built a robust Houdini to WebGL pipeline that compresses complex 3D tree, branch, and node structures into a custom web format, reducing the download size to just 3.5 MB while leveraging WebGL instancing for fast delivery."
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/of_the_oak/houdini_custom_branch_flow.webp",
        "width": 2024,
        "height": 1080,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/of_the_oak/mobile.webp",
        "width": 1920,
        "height": 1080,
        "fullscreen": false
      }
    ],
    "nextId": "everswap"
  },
  {
    "id": "everswap",
    "title": "Everswap",
    "tags": "concept \u2022 web \u2022 design \u2022 development \u2022 3d \u2022 animation",
    "featured": true,
    "thumb": "https://lusion.co/assets/projects/everswap/home.webp",
    "paragraphs": [
      "We were commissioned by the EverSwap team to create an immersive storytelling experience that makes their Web3 products feel intuitive and engaging. Inspired by the natural flow of liquidity, we built a journey through evolving terrains, rivers and lakes - transforming the complexities of trading, lending and borrowing into a fluid visual narrative of movement, connection and exchange."
    ],
    "ctaUrl": "https://everswap.com/",
    "colorBg": "#E3E3F8",
    "colorHighlight": "#756ACC",
    "colorBtnBg": "#000",
    "colorBtnText": "#192743",
    "colorText": "#000",
    "services": [
      "Concept",
      "Web Design",
      "Web Development",
      "3D Design",
      "WebGL",
      "Animation"
    ],
    "links": [
      {
        "label": "Awwwards SOTD",
        "url": "https://www.awwwards.com/sites/everswap"
      },
      {
        "label": "Launch Project",
        "url": "https://everswap.com/"
      }
    ],
    "items": [
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/everswap/main.mp4",
        "width": 1280,
        "height": 720,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/everswap/1.webp",
        "width": 1679,
        "height": 1024,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/everswap/2.webp",
        "width": 2262,
        "height": 1280,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/everswap/3.webp",
        "width": 1810,
        "height": 1024,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/everswap/4.webp",
        "width": 1819,
        "height": 1024,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/everswap/5.webp",
        "width": 1885,
        "height": 1280,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/everswap/6.webp",
        "width": 1819,
        "height": 1024,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/everswap/7.webp",
        "width": 1819,
        "height": 1024,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/everswap/8.webp",
        "width": 1819,
        "height": 1024,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/everswap/9.webp",
        "width": 2280,
        "height": 1280,
        "fullscreen": true
      }
    ],
    "nextId": "porsche_dream_machine"
  },
  {
    "id": "porsche_dream_machine",
    "title": "Porsche:Dream Machine",
    "tags": "concept \u2022 3D illustration \u2022 mograph \u2022 video",
    "featured": true,
    "thumb": "https://lusion.co/assets/projects/porsche_dream_machine/home.webp",
    "paragraphs": [
      "Commissioned by Wallpaper* and Porsche GB, Lusion created a CG short film inspired by the visionary ambitions of Porsche founder Ferry Porsche.",
      "Directed by Edan Kwan, the piece takes audiences on a four phase journey through the evolution of Porsche sports cars, expressed through digital art and motion design. The work was later showcased at Outernet London across 23,000 square feet of wraparound floor to ceiling 16K LED screens."
    ],
    "ctaUrl": "https://player.vimeo.com/video/783015830",
    "colorBg": "#EFD5D3",
    "colorHighlight": "#621422",
    "colorBtnBg": "#ffffff",
    "colorBtnText": "#621422",
    "colorText": "#000000",
    "services": [
      "Concept",
      "3D Design",
      "Motion Design",
      "Compositing"
    ],
    "links": [
      {
        "label": "Wallpaper*",
        "url": "https://www.wallpaper.com/art/porsche-driven-by-dreams"
      },
      {
        "label": "Porsche Newsroom",
        "url": "https://newsroom.porsche.com/en_PME/2023/company/porsche-great-britain-wallpaper-lusion-short-film-ferry-porsche-356-london-driven-by-dreams-30955.html"
      },
      {
        "label": "Watch Video",
        "url": "https://player.vimeo.com/video/783015830"
      }
    ],
    "items": [
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/porsche_dream_machine/image1.webp",
        "width": 1870,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/porsche_dream_machine/video1.mp4",
        "width": 16,
        "height": 9,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/porsche_dream_machine/image2.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/porsche_dream_machine/image4.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/porsche_dream_machine/image5.webp",
        "width": 2880,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/porsche_dream_machine/image6.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/porsche_dream_machine/image7.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/porsche_dream_machine/image8.webp",
        "width": 2026,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/porsche_dream_machine/image9.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/porsche_dream_machine/image10.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/porsche_dream_machine/image11.webp",
        "width": 1620,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/porsche_dream_machine/image12.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/porsche_dream_machine/image13.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/porsche_dream_machine/image14.webp",
        "width": 1620,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/porsche_dream_machine/video0.mp4",
        "width": 16,
        "height": 9,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/porsche_dream_machine/image15.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/porsche_dream_machine/image16.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      }
    ],
    "nextId": "synthetic_human"
  },
  {
    "id": "synthetic_human",
    "title": "Synthetic Human",
    "tags": "web \u2022 design \u2022 development \u2022 3d",
    "featured": true,
    "thumb": "https://lusion.co/assets/projects/synthetic_human/home.webp",
    "paragraphs": [
      "We partnered with Fantasy to launch the campaign website for Synthetic Humans, their new AI product. The goal was to create a visually rich digital experience that could support the ambition and identity of the launch.",
      "Our team developed a Houdini FX based workflow to optimize high quality 3D assets for real time use on the web, alongside building the interactive front end of the site. We also created the procedural animations and visual effects that gave the experience its depth, movement, and character."
    ],
    "ctaUrl": "https://synthetic-humans.ai/",
    "colorBg": "#9d8aff",
    "colorHighlight": "#caddff",
    "colorBtnBg": "#ffffff",
    "colorBtnText": "#192743",
    "colorText": "#ffffff",
    "services": [
      "Creative Coding",
      "Animation",
      "Frontend development",
      "3D Visual optimization"
    ],
    "links": [
      {
        "label": "Launch Project",
        "url": "https://synthetic-humans.ai/"
      }
    ],
    "items": [
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/synthetic_human/video0.mp4",
        "width": 16,
        "height": 9,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/synthetic_human/image1.webp",
        "width": 1820,
        "height": 1024,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/synthetic_human/image2.webp",
        "width": 1920,
        "height": 1280,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/synthetic_human/image3.webp",
        "width": 1820,
        "height": 1024,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/synthetic_human/image4.webp",
        "width": 1820,
        "height": 1024,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/synthetic_human/image5.webp",
        "width": 1820,
        "height": 1024,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/synthetic_human/image6.webp",
        "width": 1820,
        "height": 1024,
        "fullscreen": false
      }
    ],
    "nextId": "ddd_2024"
  },
  {
    "id": "ddd_2024",
    "title": "DDD 2024",
    "tags": "web \u2022 design \u2022 development \u2022 3d",
    "featured": true,
    "thumb": "https://lusion.co/assets/projects/ddd_2024/home.webp",
    "paragraphs": [
      "Digital Design Days is a 3-day experience that gathers in one place thousands of the world\u2019s best professionals with the brightest creativity minds in the industry and the most innovative brands."
    ],
    "ctaUrl": "https://1105-ddd2024-homepage.lusion.co",
    "colorBg": "#261c46",
    "colorHighlight": "#4ef0e1",
    "colorBtnBg": "#000000",
    "colorBtnText": "#261c46",
    "colorText": "#ffffff",
    "services": [
      "UI/UX design",
      "3D Visual design",
      "Creative Coding",
      "Frontend development",
      "Animation"
    ],
    "links": [
      {
        "label": "Launch Project",
        "url": "https://1105-ddd2024-homepage.lusion.co"
      }
    ],
    "items": [
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/ddd_2024/video0.mp4",
        "width": 1152,
        "height": 720,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/ddd_2024/image1.webp",
        "width": 1820,
        "height": 1024,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/ddd_2024/image2.webp",
        "width": 1820,
        "height": 1024,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/ddd_2024/image3.webp",
        "width": 1820,
        "height": 1024,
        "fullscreen": false
      }
    ],
    "nextId": "spaace"
  },
  {
    "id": "spaace",
    "title": "Spaace",
    "tags": "web \u2022 design \u2022 development \u2022 3d \u2022 web3",
    "featured": true,
    "thumb": "https://lusion.co/assets/projects/spaace/home.webp",
    "paragraphs": [
      "We worked with Spaace to bring this immersive brand website for their newly released gamification NFT marketplace.",
      "From creative and production, we took their raw brand material and take it into a whole new level of storytelling in this interactive web experience."
    ],
    "ctaUrl": "https://spaace.io",
    "colorBg": "#010a16",
    "colorHighlight": "#ff7225",
    "colorBtnBg": "#ffece2",
    "colorBtnText": "#ff7225",
    "colorText": "#ffece2",
    "services": [
      "Web Design",
      "Web Development",
      "3D Design",
      "WebGL"
    ],
    "links": [
      {
        "label": "Awwwards SOTD",
        "url": "https://www.awwwards.com/sites/spaace"
      },
      {
        "label": "Launch Project",
        "url": "https://spaace.io"
      }
    ],
    "items": [
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/spaace/video0.mp4",
        "width": 1146,
        "height": 714,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/spaace/image1.webp",
        "width": 1600,
        "height": 1280,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/spaace/image2.webp",
        "width": 1820,
        "height": 1024,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/spaace/image3.webp",
        "width": 1820,
        "height": 1024,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/spaace/image4.webp",
        "width": 1820,
        "height": 1024,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/spaace/image5.webp",
        "width": 1820,
        "height": 1024,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/spaace/image6.webp",
        "width": 1820,
        "height": 1024,
        "fullscreen": false
      }
    ],
    "nextId": "choo_choo_world"
  },
  {
    "id": "choo_choo_world",
    "title": "Choo Choo World",
    "tags": "concept \u2022 web \u2022 game design \u2022 3d",
    "featured": true,
    "thumb": "https://lusion.co/assets/projects/choo_choo_world/home.webp",
    "paragraphs": [
      "Choo Choo World, a research project by Lusion, aimed to create an enjoyable mini game for all ages, demonstrating web technology's positive potential. It offered a fun introduction to the web, aligned with Lusion\u2019s founders' experiences as parents.",
      "With a community-building feature, users shared game snapshots on social media, showcasing engagement strategies. Choo Choo World embodies Lusion's commitment to innovative web technology, inspiring both children and adults"
    ],
    "ctaUrl": "https://choochooworld.com/",
    "colorBg": "#E8EEF8",
    "colorHighlight": "#0591F6",
    "colorBtnBg": "#ffffff",
    "colorBtnText": "#0591F6",
    "colorText": "#000000",
    "services": [
      "Concept",
      "Game Design",
      "Web Design",
      "Web Development",
      "3D Design",
      "WebGL"
    ],
    "links": [
      {
        "label": "FWA SOTD",
        "url": "https://thefwa.com/cases/choo-choo-world"
      },
      {
        "label": "Awwwards HM",
        "url": "https://www.awwwards.com/sites/choo-choo-world"
      },
      {
        "label": "Launch Project",
        "url": "https://choochooworld.com/"
      }
    ],
    "items": [
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/choo_choo_world/image1.webp",
        "width": 1870,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/choo_choo_world/image2.webp",
        "width": 2428,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/choo_choo_world/video1.mp4",
        "width": 16,
        "height": 9,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/choo_choo_world/image4.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/choo_choo_world/image5.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/choo_choo_world/video2.mp4",
        "width": 16,
        "height": 9,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/choo_choo_world/image6.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/choo_choo_world/image7.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/choo_choo_world/image8.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/choo_choo_world/image9.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/choo_choo_world/image10.webp",
        "width": 2270,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/choo_choo_world/image11.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/choo_choo_world/image12.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/choo_choo_world/image13.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/choo_choo_world/image14.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/choo_choo_world/image15.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/choo_choo_world/image16.webp",
        "width": 2880,
        "height": 1620,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/choo_choo_world/image17.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/choo_choo_world/image18.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      }
    ],
    "nextId": "zero_tech"
  },
  {
    "id": "zero_tech",
    "title": "Zero Tech",
    "tags": "web \u2022 design \u2022 development \u2022 3d",
    "featured": false,
    "thumb": "https://lusion.co/assets/projects/zero_tech/home.webp",
    "paragraphs": [
      "Zero approached us to design an engaging interactive website for Zero.Tech. With a focus on captivating and informing their tech-savvy audience, we seamlessly merged realtime 3D visuals and scroll navigation.",
      "This created an immersive, visually stunning platform that effectively communicated Zero's innovation and solidified their position as a technology leader."
    ],
    "ctaUrl": "https://client-zero-tech.lusion.co/",
    "colorBg": "#192743",
    "colorHighlight": "#15E2FE",
    "colorBtnBg": "#ffffff",
    "colorBtnText": "#192743",
    "colorText": "#ffffff",
    "services": [
      "Concept",
      "Web Design",
      "Web Development",
      "3D Design",
      "WebGL"
    ],
    "links": [
      {
        "label": "FWA SOTD",
        "url": "https://thefwa.com/cases/zero-tech"
      },
      {
        "label": "Awwwards SOTD",
        "url": "https://www.awwwards.com/sites/zero-tech"
      },
      {
        "label": "Launch Project",
        "url": "https://client-zero-tech.lusion.co/"
      }
    ],
    "items": [
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/zero_tech/image1.webp",
        "width": 1870,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/zero_tech/image2.webp",
        "width": 2160,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/zero_tech/image3.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/zero_tech/image4.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/zero_tech/image5.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/zero_tech/image6.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/zero_tech/image7.webp",
        "width": 2790,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/zero_tech/image8.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/zero_tech/image9.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/zero_tech/image10.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/zero_tech/image11.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/zero_tech/image12.webp",
        "width": 2502,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/zero_tech/image13.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/zero_tech/image14.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      }
    ],
    "nextId": "spatial_fusion"
  },
  {
    "id": "spatial_fusion",
    "title": "Meta: Spatial Fusion",
    "tags": "web \u2022 design \u2022 development \u2022 3d",
    "featured": true,
    "thumb": "https://lusion.co/assets/projects/spatial_fusion/home.webp",
    "paragraphs": [
      "Lusion partnered with Phoria and Meta to create Spatial Fusion, an immersive WebXR experience that pushed the possibilities of web based mixed reality. Built with technologies such as spatial anchors, plane detection, and full color passthrough, the project explored new ways for users to interact with digital content in physical space.",
      "Bringing together expertise across creative technology, immersive design, and web development, the collaboration helped turn a complex technical challenge into a seamless spatial storytelling experience. The result was a forward looking mixed reality venture that invited users into a new kind of interactive world."
    ],
    "ctaUrl": "https://spatialfusion.io/",
    "colorBg": "#D6C8ED",
    "colorHighlight": "#7731E9",
    "colorBtnBg": "#000000",
    "colorBtnText": "#7731E9",
    "colorText": "#000000",
    "services": [
      "Web Design",
      "Web Development",
      "WebGL",
      "WebXR"
    ],
    "links": [
      {
        "label": "Webby Nominee",
        "url": "https://www.webbyawards.com/crafted-with-code/spatial-fusion/"
      },
      {
        "label": "Launch Project",
        "url": "https://spatialfusion.io/"
      }
    ],
    "items": [
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/spatial_fusion/image1.webp",
        "width": 1870,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/spatial_fusion/video0.mp4",
        "width": 16,
        "height": 9,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/spatial_fusion/image2.webp",
        "width": 2478,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/spatial_fusion/image3.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/spatial_fusion/image4.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/spatial_fusion/image5.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/spatial_fusion/image6.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/spatial_fusion/image7.webp",
        "width": 2381,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/spatial_fusion/image8.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/spatial_fusion/image9.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/spatial_fusion/image10.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/spatial_fusion/image11.webp",
        "width": 2880,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/spatial_fusion/image13.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/spatial_fusion/image14.webp",
        "width": 1701,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/spatial_fusion/image15.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/spatial_fusion/image16.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/spatial_fusion/image17.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      }
    ],
    "nextId": "worldcoin"
  },
  {
    "id": "worldcoin",
    "title": "Worldcoin Globe",
    "tags": "api design \u2022 webgl \u2022 3d",
    "featured": false,
    "thumb": "https://lusion.co/assets/projects/worldcoin/home.webp",
    "paragraphs": [
      "In collaboration with Tools for Humanity, we successfully integrated the dynamic Worldcoin 3D globe visualizer onto their website.",
      "Our team crafted specialized APIs, empowering the Worldcoin developer team to seamlessly activate visual effects in response to real-time user registration data. Furthermore, we innovatively embedded and compressed country and visual information into an image data format, optimizing GPU-based rendering for efficiency and speed."
    ],
    "ctaUrl": "https://worldcoin.org/",
    "colorBg": "#F3F4F9",
    "colorHighlight": "#000000",
    "colorBtnBg": "#ffffff",
    "colorBtnText": "#000000",
    "colorText": "#000000",
    "services": [
      "API Design",
      "3D Design",
      "WebGL"
    ],
    "links": [
      {
        "label": "Launch Project",
        "url": "https://worldcoin.org/"
      }
    ],
    "items": [
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/worldcoin/image1.webp",
        "width": 1679,
        "height": 1024,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/worldcoin/image2.webp",
        "width": 1918,
        "height": 1280,
        "fullscreen": true
      },
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/worldcoin/video0.mp4",
        "width": 16,
        "height": 9,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/worldcoin/image4.webp",
        "width": 1517,
        "height": 1280,
        "fullscreen": true
      },
      {
        "type": "text",
        "content": "All dot positions are procedrually generated and animated in real-time. We used the index breakpoints to reduce the data needed to store the country data and the dot positions. This allowed us to store the data in a single image file, which is then decoded and rendered on the fly."
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/worldcoin/image3.webp",
        "width": 1500,
        "height": 1024,
        "fullscreen": false
      }
    ],
    "nextId": "lusion_labs"
  },
  {
    "id": "lusion_labs",
    "title": "Lusion Labs",
    "tags": "web \u2022 design \u2022 development \u2022 3d",
    "featured": false,
    "thumb": "https://lusion.co/assets/projects/lusion_labs/home.webp",
    "paragraphs": [
      "Lusion's Dedication to Innovation and Exploration. Our dedicated space showcases internal R&D initiatives, reflecting our commitment to tech advancement. With a sleek, enchanting design, the site offers exclusive insights into our ongoing research, sparking curiosity and inspiring engaging experiences.",
      "Pioneering the Future of Tech-Driven Advertising. For our clients, this website unveils uncharted possibilities. Displaying our prowess with groundbreaking tech, it inspires fresh avenues for captivating and engaging target audiences."
    ],
    "ctaUrl": "https://labs.lusion.co/",
    "colorBg": "#1F2022",
    "colorHighlight": "#8C8C8D",
    "colorBtnBg": "#ffffff",
    "colorBtnText": "#000000",
    "colorText": "#ffffff",
    "services": [
      "Concept",
      "Web Design",
      "Web Development",
      "3D Design",
      "WebGL"
    ],
    "links": [
      {
        "label": "FWA SOTD",
        "url": "https://thefwa.com/cases/lusion-labs"
      },
      {
        "label": "Awwwards SOTD",
        "url": "https://www.awwwards.com/sites/lusion-labs"
      },
      {
        "label": "Launch Project",
        "url": "https://labs.lusion.co/"
      }
    ],
    "items": [
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/lusion_labs/image1.webp",
        "width": 1870,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/lusion_labs/image2.webp",
        "width": 2480,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/lusion_labs/image3.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/lusion_labs/image4.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/lusion_labs/video0.mp4",
        "width": 16,
        "height": 9,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/lusion_labs/image5.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/lusion_labs/image6.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/lusion_labs/image7.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/lusion_labs/image8.webp",
        "width": 2234,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/lusion_labs/image9.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/lusion_labs/image10.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/lusion_labs/image11.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/lusion_labs/image12.webp",
        "width": 2234,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/lusion_labs/image13.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/lusion_labs/image14.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/lusion_labs/image15.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/lusion_labs/image16.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      }
    ],
    "nextId": "my_little_story_book"
  },
  {
    "id": "my_little_story_book",
    "title": "My Little Storybook",
    "tags": "concept \u2022 design \u2022 development \u2022 3d",
    "featured": false,
    "thumb": "https://lusion.co/assets/projects/my_little_story_book/home.webp",
    "paragraphs": [
      "Expanding Boundaries through Cinematic Innovation. An R&D feat by Lusion, this project showcased team versatility and artistry. We crafted 3D assets from scratch and seamlessly blended hand-drawn sketches into a captivating WebGL environment for a unique experience.",
      "Crafting My Little Storybook's Triumph. The Lusion team meticulously shaped every element in this challenging one-month project. Their dedication resulted in acclaim, with multiple awards, including the coveted 2022 Webby Award for Best Visual Design Aesthetic, recognizing the blend of innovation and creativity."
    ],
    "ctaUrl": "https://exp-my-little-storybook.lusion.co/",
    "colorBg": "#D1DDF2",
    "colorHighlight": "#6680A0",
    "colorBtnBg": "#ffffff",
    "colorBtnText": "#6680A0",
    "colorText": "#000000",
    "services": [
      "Concept",
      "Web Design",
      "Web Development",
      "3D Design",
      "WebGL"
    ],
    "links": [
      {
        "label": "FWA SOTD",
        "url": "https://thefwa.com/cases/my-little-storybook"
      },
      {
        "label": "Awwwards SOTD",
        "url": "https://www.awwwards.com/sites/my-little-storybook"
      },
      {
        "label": "Webby Winner",
        "url": "https://winners.webbyawards.com/2022/websites-and-mobile-sites/features-design/best-visual-design-aesthetic/206405/my-little-storybook"
      },
      {
        "label": "Launch Project",
        "url": "https://exp-my-little-storybook.lusion.co/"
      }
    ],
    "items": [
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/my_little_story_book/image1.webp",
        "width": 1870,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/my_little_story_book/video0.mp4",
        "width": 16,
        "height": 9,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/my_little_story_book/image2.webp",
        "width": 2428,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/my_little_story_book/image3.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/my_little_story_book/image4.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/my_little_story_book/image5.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/my_little_story_book/image6.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/my_little_story_book/image7.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/my_little_story_book/image8.webp",
        "width": 2880,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/my_little_story_book/image9.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/my_little_story_book/image10.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/my_little_story_book/image11.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/my_little_story_book/image12.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/my_little_story_book/image13.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/my_little_story_book/image14.webp",
        "width": 1637,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/my_little_story_book/image15.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      }
    ],
    "nextId": "soda_experience"
  },
  {
    "id": "soda_experience",
    "title": "Soda Experience",
    "tags": "AR \u2022 development \u2022 3d",
    "featured": true,
    "thumb": "https://lusion.co/assets/projects/soda_experience/home.webp",
    "paragraphs": [
      "Lusion teamed up with GoSpooky to embark on an exciting journey with Coca-Cola European Partners. Our mission? To elevate the way soft drinks are served by bringing the magic of web-based augmented reality (AR) to the beverage experience.",
      "Faced with a tight timeline due to a previous vendor's shortfall, Lusion undertook the challenge to create a lifelike WebAR encounter that would make Coca-Cola's drink offerings burst to life."
    ],
    "ctaUrl": "",
    "colorBg": "#E1E2E4",
    "colorHighlight": "#F40009",
    "colorBtnBg": "#FFFFFF",
    "colorBtnText": "#F40009",
    "colorText": "#000000",
    "services": [
      "3D Optimization",
      "WebGL",
      "WebAR"
    ],
    "links": [
      {
        "label": "8th Wall Blog",
        "url": "https://www.8thwall.com/blog/post/52515703897/coca-cola-europacific-partners-nl-is-the-first-company-in-the-world-to-add-ar-experience-to-the-serving-of-soft-drinks"
      }
    ],
    "items": [
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/soda_experience/image1.webp",
        "width": 1780,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/soda_experience/video0.mp4",
        "width": 16,
        "height": 9,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/soda_experience/image2.webp",
        "width": 2428,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/soda_experience/image3.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/soda_experience/image4.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/soda_experience/image5.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/soda_experience/image6.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/soda_experience/image7.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      }
    ],
    "nextId": "infinite_passerella"
  },
  {
    "id": "infinite_passerella",
    "title": "Infinite Passerella",
    "tags": "concept \u2022 design \u2022 development \u2022 3d",
    "featured": false,
    "thumb": "https://lusion.co/assets/projects/infinite_passerella/home.webp",
    "paragraphs": [
      "A New Era in Fashion Showcase. Lusion's R&D journey transforms fashion shows into interactive virtual experiences, inviting viewers worldwide to a 24/7 spectacle.",
      "Meticulously crafted clothing textures and 3D models seamlessly merge fashion and technology, captivating enthusiasts. This pioneering project bridges the realms of fashion and digital innovation, paving the way for the future of virtual fashion."
    ],
    "ctaUrl": "https://exp-infinite-passerella.lusion.co/",
    "colorBg": "#28262B",
    "colorHighlight": "#FFB9B9",
    "colorBtnBg": "#FFB9B9",
    "colorBtnText": "#28262B",
    "colorText": "#ffffff",
    "services": [
      "Concept",
      "Web Design",
      "Web Development",
      "3D Design",
      "WebGL"
    ],
    "links": [
      {
        "label": "FWA SOTD",
        "url": "https://thefwa.com/cases/infinite-passerella"
      },
      {
        "label": "Awwwards SOTD",
        "url": "https://www.awwwards.com/sites/infinite-passerella"
      },
      {
        "label": "Launch Project",
        "url": "https://exp-infinite-passerella.lusion.co/"
      }
    ],
    "items": [
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/infinite_passerella/image1.webp",
        "width": 1870,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/infinite_passerella/image2.webp",
        "width": 2428,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/infinite_passerella/video0.mp4",
        "width": 16,
        "height": 9,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/infinite_passerella/image3.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/infinite_passerella/image4.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/infinite_passerella/image5.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/infinite_passerella/video1.mp4",
        "width": 16,
        "height": 9,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/infinite_passerella/image6.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/infinite_passerella/image7.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/infinite_passerella/image8.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      }
    ],
    "nextId": "the_turn_of_the_screw"
  },
  {
    "id": "the_turn_of_the_screw",
    "title": "The Turn Of The Screw",
    "tags": "design \u2022 development \u2022 3d",
    "featured": false,
    "thumb": "https://lusion.co/assets/projects/the_turn_of_the_screw/home.webp",
    "paragraphs": [
      "In October 2019, Opera North, alongside the Audiolab of York University and the sound artist James Bulley, came to Lusion for a collaboration on an innovative cultural project. Their idea was to record the Turn of the Screw opera in a spatialized way, then place these recordings in an explorable 3D environment. The main goal of this project was to create an audiovisual walk through a binaural landscape."
    ],
    "ctaUrl": "https://www.operanorth.co.uk/turn-of-the-screw-immersive-trailer/",
    "colorBg": "#2B3037",
    "colorHighlight": "#D5BFEF",
    "colorBtnBg": "#ffffff",
    "colorBtnText": "#2B3037",
    "colorText": "#ffffff",
    "services": [
      "Web Design",
      "Web Development",
      "3D Design",
      "WebGL"
    ],
    "links": [
      {
        "label": "FWA SOTD",
        "url": "https://thefwa.com/cases/the-turn-of-the-screw"
      },
      {
        "label": "Awwwards SOTM",
        "url": "https://www.awwwards.com/sites/the-turn-of-the-screw"
      },
      {
        "label": "Launch Project",
        "url": "https://www.operanorth.co.uk/turn-of-the-screw-immersive-trailer/"
      }
    ],
    "items": [
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/the_turn_of_the_screw/image1.webp",
        "width": 1870,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/the_turn_of_the_screw/video0.mp4",
        "width": 16,
        "height": 9,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/the_turn_of_the_screw/image2.webp",
        "width": 2880,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/the_turn_of_the_screw/image3.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/the_turn_of_the_screw/image4.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/the_turn_of_the_screw/image5.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/the_turn_of_the_screw/image6.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/the_turn_of_the_screw/image7.webp",
        "width": 2880,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/the_turn_of_the_screw/image8.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/the_turn_of_the_screw/image9.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/the_turn_of_the_screw/image10.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/the_turn_of_the_screw/image11.webp",
        "width": 2684,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/the_turn_of_the_screw/image12.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/the_turn_of_the_screw/image13.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      }
    ],
    "nextId": "maxmara_bearings_gifts"
  },
  {
    "id": "maxmara_bearings_gifts",
    "title": "Max Mara: Bearing Gifts",
    "tags": "development \u2022 3D",
    "featured": false,
    "thumb": "https://lusion.co/assets/projects/maxmara_bearings_gifts/home.webp",
    "paragraphs": [
      "Collaborating with LOW: Transforming Digital Experiences. Our partnership on the MaxMara project showcases how creativity shapes digital landscapes. LOW's vision for a charming interactive web experience led to Max the Teddy guiding users through playful scenes and product showcases.",
      "Central to our approach is meticulous planning, aligning render quality, timelines, and budgets for creative practicality. Transparent communication with LOW's team fostered a shared vision, enabling us to explore unique possibilities.",
      "Strategic decisions ensured consistent experiences across devices, including non-real-time lighting for optimized performance. Collaborating with 3D modeling vendors enriched the application with carefully designed assets, seamlessly integrating our services."
    ],
    "ctaUrl": "",
    "colorBg": "#d2c6b2",
    "colorHighlight": "#806542",
    "colorBtnBg": "#ffffff",
    "colorBtnText": "#806542",
    "colorText": "#000000",
    "services": [
      "WebGL"
    ],
    "links": [
      {
        "label": "FWA SOTD",
        "url": "https://thefwa.com/cases/maxmara-bearing-gifts"
      }
    ],
    "items": [
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/maxmara_bearings_gifts/image1.webp",
        "width": 1870,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/maxmara_bearings_gifts/video0.mp4",
        "width": 16,
        "height": 9,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/maxmara_bearings_gifts/image2.webp",
        "width": 2880,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/maxmara_bearings_gifts/image3.webp",
        "width": 2016,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/maxmara_bearings_gifts/image4.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/maxmara_bearings_gifts/image5.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/maxmara_bearings_gifts/image6.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/maxmara_bearings_gifts/image7.webp",
        "width": 2386,
        "height": 1620,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/maxmara_bearings_gifts/image8.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "video",
        "src": "https://lusion.dev/assets/projects/maxmara_bearings_gifts/video1.mp4",
        "width": 16,
        "height": 9,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/maxmara_bearings_gifts/image9.webp",
        "width": 1638,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/maxmara_bearings_gifts/image10.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/maxmara_bearings_gifts/image11.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/maxmara_bearings_gifts/image12.webp",
        "width": 2880,
        "height": 1660,
        "fullscreen": true
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/maxmara_bearings_gifts/image13.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/maxmara_bearings_gifts/image14.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      },
      {
        "type": "image",
        "src": "https://lusion.dev/assets/projects/maxmara_bearings_gifts/image15.webp",
        "width": 2026,
        "height": 1140,
        "fullscreen": false
      }
    ],
    "nextId": "oryzo_ai"
  }
]
