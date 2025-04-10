import joi from "joi";

export const joiUserSchema=joi.object({
    name:joi.string().required(),
    email:joi.string().email().required(),
    password:joi.string().min(4).required(),
    isBlocked:joi.boolean().default(false).optional(),
    role:joi.boolean().default("user").optional(),
    refreshToken:joi.string().optional()
})

