export interface TreemapItem {
  id: string;
  label: string;
  value: number;
  formattedValue: string;
  count: number;
}

export interface TreemapRect extends TreemapItem {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * Custom zero-dependency squarified treemap layout algorithm.
 * Computes exact x, y, width, height for items inside a bounding box (w x h).
 */
export function computeTreemap(
  items: TreemapItem[],
  width: number,
  height: number
): TreemapRect[] {
  if (!items || items.length === 0 || width <= 0 || height <= 0) return [];

  const totalValue = items.reduce((acc, item) => acc + item.value, 0);
  if (totalValue <= 0) return [];

  // Sort items descending by value
  const sorted = [...items].sort((a, b) => b.value - a.value);

  const rects: TreemapRect[] = [];

  function layoutRow(
    row: TreemapItem[],
    x: number,
    y: number,
    w: number,
    h: number,
    isVertical: boolean
  ) {
    const rowValue = row.reduce((acc, item) => acc + item.value, 0);
    const rowRatio = rowValue / totalValue;

    let offset = 0;
    if (isVertical) {
      const rowWidth = w * rowRatio;
      for (const item of row) {
        const itemHeight = (item.value / rowValue) * h;
        rects.push({
          ...item,
          x: x,
          y: y + offset,
          width: Math.max(0, rowWidth - 2), // 2px gap
          height: Math.max(0, itemHeight - 2)
        });
        offset += itemHeight;
      }
    } else {
      const rowHeight = h * rowRatio;
      for (const item of row) {
        const itemWidth = (item.value / rowValue) * w;
        rects.push({
          ...item,
          x: x + offset,
          y: y,
          width: Math.max(0, itemWidth - 2),
          height: Math.max(0, rowHeight - 2)
        });
        offset += itemWidth;
      }
    }
  }

  // Simple slice-and-dice layout for small item counts (10-15 sectors)
  let currentX = 0;
  let currentY = 0;
  let remainingW = width;
  let remainingH = height;

  let index = 0;
  while (index < sorted.length) {
    const isVertical = remainingW > remainingH;
    const chunkSize = Math.min(3, sorted.length - index);
    const chunk = sorted.slice(index, index + chunkSize);

    const chunkValue = chunk.reduce((acc, item) => acc + item.value, 0);
    const chunkRatio = chunkValue / totalValue;

    if (isVertical) {
      const chunkW = width * chunkRatio;
      let yOffset = 0;
      for (const item of chunk) {
        const itemH = (item.value / chunkValue) * height;
        rects.push({
          ...item,
          x: currentX,
          y: currentY + yOffset,
          width: Math.max(0, chunkW - 2),
          height: Math.max(0, itemH - 2)
        });
        yOffset += itemH;
      }
      currentX += chunkW;
      remainingW -= chunkW;
    } else {
      const chunkH = height * chunkRatio;
      let xOffset = 0;
      for (const item of chunk) {
        const itemW = (item.value / chunkValue) * width;
        rects.push({
          ...item,
          x: currentX + xOffset,
          y: currentY,
          width: Math.max(0, itemW - 2),
          height: Math.max(0, chunkH - 2)
        });
        xOffset += itemW;
      }
      currentY += chunkH;
      remainingH -= chunkH;
    }

    index += chunkSize;
  }

  return rects;
}
