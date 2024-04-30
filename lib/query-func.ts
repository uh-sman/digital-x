import db from "@/lib/db"

export const getOrganizationById = async (id: string) => {
    try {
        const org = await db.organization.findFirst({
            where: {
                userId: id
            }
        })
        return org
    } catch {
        return null
    }
}
export const getOrganizationByName = async (name: string) => {
    try {
        const org = await db.organization.findFirst({
            where: {
                name
            }
        })
        return org
    } catch {
        return null
    }
}