import { Request, Response } from "express";
import AWS from "aws-sdk";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";

dotenv.config();
const { ACCESSKEYID, SECRETACCESKEY } = process.env;
const s3 = new AWS.S3({
  // region: "ap-southeast-1",
  accessKeyId: ACCESSKEYID,
  secretAccessKey: SECRETACCESKEY,
});

interface IS3Params<T> {
  Bucket: T;
  ContentType: T;
  Key: T;
  // region: T;
}

export const uploadImage = (req: Request, res: Response) => {
  const key = `clevergene/${uuidv4()}.jpeg`;
  const params: IS3Params<string> = {
    Bucket: "clever-gene-bucket",
    ContentType: "image/jpeg",
    Key: key,
    // region: "ap-southeast-1",
  };
  s3.getSignedUrl(
    "putObject",
    {
      Bucket: "clever-gene-bucket",
      ContentType: "image/jpeg",
      Key: key,
      // region: "ap-southeast-1",
    },
    (err, url) => {
      console.log("ERR:", err);
      console.log("URL:", url);

      // err ? res.status(404).json({ ERROR: err }) :
      res.status(201).json({ key, url });
      // res.json({ message: "success" });
    }
  );
};
