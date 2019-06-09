export const updateObject = (oldObject: any, updateProperties: any) => ({
    ...oldObject,
    ...updateProperties
});