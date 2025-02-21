export function generateSlug(title: string) {
    return title
        .toLowerCase() // Convert to lowercase
        .normalize('NFD') // Decompose characters into base and accents
        .replace(/[\u0300-\u036f]/g, '') // Remove accents (diacritical marks)
        .trim() // Remove leading and trailing whitespace
        .replace(/\./g, '-') // Replace dots with hyphens for clarity
        .replace(/\//g, '-') // Replace slashes with hyphens
        .replace(/\+/g, '-') // Replace plus signs with hyphens
        .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters except spaces and hyphens
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Remove multiple consecutive hyphens
        .replace(/^-+|-+$/g, ''); // Remove hyphens at the start and end
}