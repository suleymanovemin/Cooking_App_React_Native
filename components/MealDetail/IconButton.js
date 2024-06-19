import { Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
const IconButton = ({ onPress, color, icon }) => {
  return (
    <Pressable android_ripple={{ color: "#ccc" }} style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]} onPress={onPress}>
        <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  )
}

export default IconButton