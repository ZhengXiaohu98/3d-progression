export const metadata = {
  title: "Explore Projects | Xiaohu's 3D Creations",
  description:
    "Dive into my project gallery, a space dedicated to exploring cutting-edge 3D visuals and interactivity for the modern web.",
  openGraph: {
    title: "Explore Projects | Xiaohu's 3D Creations",
    description:
      "Dive into my project gallery, a space dedicated to exploring cutting-edge 3D visuals and interactivity for the modern web.",
    images: [
      {
        url: "/logo_original.png",
        width: 64,
        height: 64,
      },
    ],
    type: "website",
  },
};

interface ProjectLayoutProps {
  children: React.ReactNode;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default ProjectLayout;
