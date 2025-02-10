import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Iniciar Sesión</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input type="email" placeholder="Correo electrónico" required />
            <Input type="password" placeholder="Contraseña" required />
            <Button className="w-full">Ingresar</Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-gray-500">
            ¿Olvidaste tu contraseña? <a href="#" className="text-blue-500 hover:underline">Recupérala aquí</a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}