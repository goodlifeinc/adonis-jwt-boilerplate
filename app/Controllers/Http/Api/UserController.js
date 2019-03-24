class UserController {
  async getUser({ response, auth }) {
    try {
      const { email, username } = await auth.getUser();
      return { email, username };
    } catch (error) {
      response.status(401).send({
        error: 'Missing or invalid jwt token'
      });
    }
  }
}
module.exports = UserController;
