export interface Resource {
  title: string;
  url: string;
}

export interface Phase {
  id: string;
  title: string;
  duration: string;
  goal: string;
  resources: Resource[];
}

export interface RoadmapSection {
  phase: number;
  title: string;
  description?: string;
  subsections: {
    title: string;
    resources: Resource[];
  }[];
}