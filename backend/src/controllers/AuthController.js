class AuthController {
  test(request, response) {
    return response.json({
      message: "AuthController funcionando!",
    });
  }
}
export default AuthController;
