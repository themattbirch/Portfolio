export function formatCategorySlug(category: string): string {
    return category.toLowerCase().replace(/\s+/g, "-");
}