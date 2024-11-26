
function calCulateIndex(currentPage:number, pageSize:number, totalCount:number, itemIndex:number) {
    const lastIndex = totalCount - (currentPage -1) * pageSize;
    return lastIndex - itemIndex;
}

export default calCulateIndex;