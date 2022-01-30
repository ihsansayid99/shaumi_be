module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7a95c36656499e1dd4fa66cb2471f320'),
  },
});
