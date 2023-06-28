import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function LoginPage() {
  return (
    <div
      style={{
        display: "flex",
        margin: 100,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        // border: "1px solid black",
        borderRadius: "20px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <img
          src="WM.png"
          alt="Walmart"
          style={{
            width: "300px",
            height: "90px",
          }}
        />
        <div>
          <h1
            style={{
              color: "#1976D2",
            }}
          >
            Log in
          </h1>
          <form>
            <TextField
              id="outlined-password-input"
              label="Email Address"
              type="email"
              autoComplete="current-password"
              size="large"
              style={{
                margin: 20,
                width: "50%",
              }}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="Password"
              autoComplete="current-password"
              style={{
                margin: 20,
                width: "50%",
              }}
            />
            <Button
              variant="contained"
              style={{
                margin: 20,
                width: "50%",
                padding: 10,
              }}
              size="large"
            >
              <b>LOGIN</b>
            </Button>
            <p>
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "gray",
                }}
              >
                Forgot Password?
              </a>
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p> Don't have an account?&nbsp; </p>

              <p>
                <a
                  href="/"
                  style={{
                    textDecoration: "none",
                    color: "#2979ff",
                  }}
                >
                  Register here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div
        style={{
          width: "50%",
        }}
      >
        <img
          src="loginimage.jpg"
          alt="LoginImage"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "20px",
          }}
        />
      </div>
    </div>
  );
}
export default LoginPage;
