export default function AuthModal({
  show,
  isLogin,
  setIsLogin,
  form,
  handleChange,
  handleLogin,
  handleRegister,
}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 w-[300px]">
        <h2>{isLogin ? "Login" : "Register"}</h2>

        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" placeholder="Password" onChange={handleChange} />

        <button onClick={isLogin ? handleLogin : handleRegister}>
          {isLogin ? "Login" : "Register"}
        </button>

        <p onClick={()=>setIsLogin(!isLogin)}>
          Switch
        </p>
      </div>
    </div>
  );
}                   