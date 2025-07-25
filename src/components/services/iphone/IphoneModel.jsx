

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function IphoneModel(props) {
  const { nodes, materials } = useGLTF('/iphone.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -2.588, 2.419]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.iPhone__12_Pro_BodyFrame_0.geometry} material={materials.BodyFrame} />
            <mesh geometry={nodes.iPhone__12_Pro_MicrophoneSpeaker_0.geometry} material={materials.MicrophoneSpeaker} />
            <mesh geometry={nodes.iPhone__12_Pro_GrayGlossy2_0.geometry} material={materials.GrayGlossy2} />
            <mesh geometry={nodes.iPhone__12_Pro_Antenna_0.geometry} material={materials.Antenna} />
            <mesh geometry={nodes.iPhone12_Pro_Body_0.geometry} material={materials.Body} />
            <mesh geometry={nodes.Camera1_PacificBlue_0.geometry} material={materials.PacificBlue} />
            <mesh geometry={nodes.Camera1_GrayGlossy_0.geometry} material={materials.GrayGlossy} />
            <mesh geometry={nodes.Camera1_FrontCamera_0.geometry} material={materials.FrontCamera} />
            <mesh geometry={nodes.Camera1_Blackmatte_0.geometry} material={materials.Blackmatte} />
            <mesh geometry={nodes.Camera1_Cameralens_0.geometry} material={materials.Cameralens} />
            <mesh geometry={nodes.Camera1_Glass_0.geometry} material={materials.Glass} />
            <mesh geometry={nodes.Flash_Flash2_0.geometry} material={materials.Flash2} />
            <mesh geometry={nodes.Flash_Flash_0.geometry} material={materials.Flash} />
            <mesh geometry={nodes.LiDar_LiDar__0.geometry} material={materials.LiDar} />
            <mesh geometry={nodes.Bezel_bezel_0.geometry} material={materials.bezel} />
            <mesh geometry={nodes.FrontCamera_Cameralens_0.geometry} material={materials.Cameralens} />
            <mesh geometry={nodes.FrontCamera_FrontCamera_0.geometry} material={materials.FrontCamera} />
            <mesh geometry={nodes.FrontCamera_Glass_0.geometry} material={materials.Glass} />
            <mesh geometry={nodes.FrontMic_GrayGlossy2_0.geometry} material={materials.GrayGlossy2} />
            <mesh geometry={nodes.FrontMic_MicrophoneSpeaker_0.geometry} material={materials.MicrophoneSpeaker} />
            <mesh geometry={nodes.FrontCamera001_bezel001_0.geometry} material={materials['bezel.001']} position={[0, 0, -0.001]} />
            <mesh geometry={nodes.Camera3_PacificBlue_0.geometry} material={materials.PacificBlue} />
            <mesh geometry={nodes.Camera3_GrayGlossy_0.geometry} material={materials.GrayGlossy} />
            <mesh geometry={nodes.Camera3_FrontCamera_0.geometry} material={materials.FrontCamera} />
            <mesh geometry={nodes.Camera3_Blackmatte_0.geometry} material={materials.Blackmatte} />
            <mesh geometry={nodes.Camera3_Cameralens_0.geometry} material={materials.Cameralens} />
            <mesh geometry={nodes.Camera3_Glass_0.geometry} material={materials.Glass} />
            <mesh geometry={nodes.Camera2_PacificBlue_0.geometry} material={materials.PacificBlue} />
            <mesh geometry={nodes.Camera2_GrayGlossy_0.geometry} material={materials.GrayGlossy} />
            <mesh geometry={nodes.Camera2_FrontCamera_0.geometry} material={materials.FrontCamera} />
            <mesh geometry={nodes.Camera2_Blackmatte_0.geometry} material={materials.Blackmatte} />
            <mesh geometry={nodes.Camera2_Cameralens_0.geometry} material={materials.Cameralens} />
            <mesh geometry={nodes.Camera2_Glass_0.geometry} material={materials.Glass} />
            <mesh geometry={nodes.Screen_Wallpaper_0.geometry} material={materials.Wallpaper} />
            <mesh geometry={nodes.Apple_Logo_Logo_0.geometry} material={materials.Logo} />
            <mesh geometry={nodes.CameraModule001_Glass_0.geometry} material={materials.Glass} />
            <mesh geometry={nodes.CameraModule002_MicrophoneSpeaker_0.geometry} material={materials.MicrophoneSpeaker} />
            <mesh geometry={nodes.VolumeButton_BodyFrame_0.geometry} material={materials.BodyFrame} />
            <mesh geometry={nodes.PowerButton_BodyFrame_0.geometry} material={materials.BodyFrame} />
            <mesh geometry={nodes.Port_Blackmatte_0.geometry} material={materials.Blackmatte} />
            <mesh geometry={nodes.Port_BodyFrame_0.geometry} material={materials.BodyFrame} />
            <mesh geometry={nodes.SimTray_Blackmatte_0.geometry} material={materials.Blackmatte} />
            <mesh geometry={nodes.SimTray_BodyFrame_0.geometry} material={materials.BodyFrame} />
            <mesh geometry={nodes.MuteButton_BodyFrame_0.geometry} material={materials.BodyFrame} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/iphone.glb')
