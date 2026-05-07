import { z } from 'zod';

import { Z } from '../../zod-class';

export class UpdateProjectSettingsDto extends Z.class({
	langsmithCredentialId: z.string().optional().nullable(),
	langsmithProject: z.string().max(255).optional().nullable(),
}) {}
