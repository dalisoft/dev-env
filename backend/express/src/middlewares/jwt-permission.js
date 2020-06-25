import jwtPermissionMiddleware from 'express-jwt-permissions';

export default jwtPermissionMiddleware({ permissionsProperty: 'roles' });
