import { IPhoto } from "@/models/photos.ts";

export const getPhotosGroup = ({
  data,
  columnCount,
}: {
  data: IPhoto[];
  columnCount: number;
}) => {
  const photosGroup: IPhoto[][] = new Array(columnCount).fill(1).map(() => []);
  const photosGroupHeight = [0, 0, 0];
  for (let i = 0; i < data?.length; i++) {
    const item = data[i];
    const minHeight = Math.min(...photosGroupHeight);
    const minHeightIndex = photosGroupHeight.indexOf(minHeight);
    photosGroup[minHeightIndex].push(item);
    photosGroupHeight[minHeightIndex] += item.height / item.width;
  }

  return photosGroup;
};
