'use client'
import { invoke } from '@tauri-apps/api/tauri'
import { arch, platform } from '@tauri-apps/api/os';
import { Command } from '@tauri-apps/api/shell'
import { useState } from 'react';
import { Button, Card } from '@nextui-org/react';

export default function Home() {
  const [platformLabel, setPlatformLabel] = useState('Indeterminada')
  async function teste() {
    invoke('os_info').then((message) => console.log(message))
    setPlatformLabel(await platform())

  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="flex justify-center align-middle items-center space-x-2 space-y-2 w-1/2 h-1/4 bg-stone-50">
        <label className='font-bold'>Plataforma: {platformLabel}</label>
        <Button onClick={teste}>Atualizar</Button>
      </Card>
    </main>
  );
}
