export type Course = {
  id: string;
  instructorId: string;
  name: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  instructor: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
  };
  lessonsNumber: number;
};
