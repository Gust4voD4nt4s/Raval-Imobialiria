"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
const validateEnv = () => {
    (0, envalid_1.cleanEnv)(process.env, {
        PORT: (0, envalid_1.port)(),
        POSTGRES_HOST: (0, envalid_1.str)(),
        POSTGRES_DB: (0, envalid_1.str)(),
        POSTGRES_PORT: (0, envalid_1.port)(),
        POSTGRES_USER: (0, envalid_1.str)(),
        POSTGRES_PASSWORD: (0, envalid_1.str)()
    });
};
exports.default = validateEnv;
//# sourceMappingURL=validate-env.js.map