export interface IPost {
  postId: string;
  postHeading: string;
  postDescription: string;
  image: string;
  totalLikes: number;
  userLike: boolean;
  postedBy: string;
  isCat: boolean;
}
