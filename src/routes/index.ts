// import cookieSession from "cookie-session";
import express, { Request, Response } from "express";
import { login, isAuthorize, uploadImage } from "../controller";

const router = express.Router();

router.get("/", function (req: Request, res: Response) {
  res.send("welcome");
});

router.post("/login", login);
router.get("/logout", (req: Request, res: Response) => {
  res
    .clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .json({});
  console.log("logging out >>>>>>>>>>>>>>>>>");
});
router.get("/currentuser", isAuthorize);

router.get("/image", uploadImage);

// router.

export default router;
