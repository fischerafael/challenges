// pages/api/text-to-speech.js

import fs from "fs";
import path from "path";
import OpenAI from "openai";

const speechFile = path.resolve("./speech.mp3");

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { text } = req.body;

    const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI });

    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: "shimmer",
      input: text,
    });

    const buffer = Buffer.from(await mp3.arrayBuffer());

    res.setHeader("Content-Type", "audio/mpeg"); // Define o tipo de conteúdo como MP3
    res.setHeader("Content-Disposition", "attachment; filename=speech.mp3"); // Define o cabeçalho de disposição para download

    res.send(buffer); // Envie o buffer diretamente como resposta

    // console.log(speechFile);
    // const buffer = Buffer.from(await mp3.arrayBuffer());
    // const file = await fs.promises.writeFile(speechFile, buffer);
    // return res.status(200).json({ file: file });
  } else {
    res.status(405).end();
  }
}
