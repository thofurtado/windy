'use client'
import { invoke } from '@tauri-apps/api/tauri'
import { arch, platform } from '@tauri-apps/api/os';
import { Command } from '@tauri-apps/api/shell'

export default function Home() {

  async function teste() {
    invoke('os_info').then((message) => console.log(message))
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={teste}>send</button>
    </main>
  );
}
