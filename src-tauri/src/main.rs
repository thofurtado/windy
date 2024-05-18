// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]



#[tauri::command]
fn os_info()  -> String {
  "Hello from Rust!".into()
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![os_info])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
