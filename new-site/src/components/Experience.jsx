import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Computer } from "./Computer"

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={5} />
            <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={40} />
            <OrbitControls enableDamping={false} enablePan={false} enableRotate={false} enableZoom={false} />
            <Computer />
        </>
    )
}

export default Experience