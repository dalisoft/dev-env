import expressHelmet from 'helmet';

export default expressHelmet({ hidePoweredBy: { setTo: 'express' } });
