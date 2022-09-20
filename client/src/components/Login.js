import React from "react"
import Thumbnail from "../assets/loginpage.png"
import { useDispatch } from "react-redux"
import loginUserAction from "../app/actions/loginUserActions"
import { useNavigate } from "react-router-dom"
import Loading from "../components/Loading"
import { getIsLoading } from "../app/selectors/viewSelector"
import { useSelector } from "react-redux"
function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLoading = useSelector(getIsLoading)

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const handleLogin = async () => {
    await dispatch(loginUserAction(email, password))
    navigate("/dashboard")
  }

  if (isLoading) return <Loading />

  return (
    <div className="w-screen flex justify-evenly">
      <div className="hidden md:flex">
        <img src={Thumbnail} alt="login" className="h-screen" />
      </div>
      <div className="login flex flex-col items-center justify-evenly py-24 h-screen">
        <img
          className="object-contain h-16 my-5"
          src="https://www.zigit.co.il/wp-content/uploads/2020/08/logoas.svg"
          alt=""
        />
        <div className="flex flex-col h-1/4 justify-between">
          <input
            className="w-80 h-12 text-[20px] pl-2.5 mb-2.5 rounded-md"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-80 h-12 text-[20px] pl-2.5 mb-2.5 rounded-md"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-80 h-12 font-bold text-white bg-[#00a7b7] rounded-md hover:bg-[#00a7b7] hover:opacity-80 hover:shadow-lg hover:transition-all duration-300"
            type="submit"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
