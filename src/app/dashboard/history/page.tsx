import { DollarSign, TrendingUp, TrendingDown, BarChart3, PieChart, LineChart, Activity } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function History() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
        <h1 className="text-xl font-semibold">Historial</h1>
        <div className="ml-auto flex items-center gap-4">
          <Select defaultValue="2023">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Seleccionar año" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2020">2020</SelectItem>
            </SelectContent>
          </Select>
          <Button>Actualizar datos</Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Tabs defaultValue="general" className="space-y-4">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="mercados">Mercados</TabsTrigger>
              <TabsTrigger value="indicadores">Indicadores</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" size="sm">
                Descargar informe
              </Button>
              <Button variant="outline" size="sm">
                Compartir
              </Button>
            </div>
          </div>
          <TabsContent value="general" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">PIB</CardTitle>
                  <DollarSign className="h-4 w-4 text-emerald-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$1.28T</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-emerald-600 flex items-center">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      +2.5%
                    </span>{" "}
                    vs año anterior
                  </p>
                </CardContent>
                <CardFooter className="p-2">
                  <p className="text-xs text-muted-foreground">Actualizado: Dic 2023</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Inflación</CardTitle>
                  <BarChart3 className="h-4 w-4 text-red-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.7%</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-red-600 flex items-center">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      +0.2%
                    </span>{" "}
                    vs mes anterior
                  </p>
                </CardContent>
                <CardFooter className="p-2">
                  <p className="text-xs text-muted-foreground">Actualizado: Nov 2023</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Desempleo</CardTitle>
                  <Activity className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5.8%</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-emerald-600 flex items-center">
                      <TrendingDown className="mr-1 h-3 w-3" />
                      -0.3%
                    </span>{" "}
                    vs trimestre anterior
                  </p>
                </CardContent>
                <CardFooter className="p-2">
                  <p className="text-xs text-muted-foreground">Actualizado: Oct 2023</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Tipo de Interés</CardTitle>
                  <LineChart className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.25%</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-red-600 flex items-center">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      +0.25%
                    </span>{" "}
                    vs trimestre anterior
                  </p>
                </CardContent>
                <CardFooter className="p-2">
                  <p className="text-xs text-muted-foreground">Actualizado: Dic 2023</p>
                </CardFooter>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Evolución del PIB</CardTitle>
                  <CardDescription>Crecimiento económico en los últimos 5 años</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[200px] w-full bg-slate-100 rounded-md flex items-center justify-center">
                    <LineChart className="h-8 w-8 text-slate-400" />
                    <span className="ml-2 text-slate-500">Gráfico de evolución del PIB</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Distribución Sectorial</CardTitle>
                  <CardDescription>Contribución al PIB por sectores</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] w-full bg-slate-100 rounded-md flex items-center justify-center">
                    <PieChart className="h-8 w-8 text-slate-400" />
                    <span className="ml-2 text-slate-500">Gráfico de sectores</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="mercados" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Índice Bursátil</CardTitle>
                  <TrendingUp className="h-4 w-4 text-emerald-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">9,876.54</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-emerald-600 flex items-center">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      +1.2%
                    </span>{" "}
                    hoy
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Tipo de Cambio EUR/USD</CardTitle>
                  <DollarSign className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1.087</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-red-600 flex items-center">
                      <TrendingDown className="mr-1 h-3 w-3" />
                      -0.3%
                    </span>{" "}
                    hoy
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Petróleo Brent</CardTitle>
                  <Activity className="h-4 w-4 text-amber-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$78.35</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-emerald-600 flex items-center">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      +2.1%
                    </span>{" "}
                    hoy
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Oro</CardTitle>
                  <LineChart className="h-4 w-4 text-yellow-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$1,932.45</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-emerald-600 flex items-center">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      +0.5%
                    </span>{" "}
                    hoy
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="indicadores" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Balanza Comercial</CardTitle>
                  <CardDescription>Exportaciones vs Importaciones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">-$2.4B</div>
                  <p className="text-xs text-muted-foreground mt-1">Déficit comercial en el último trimestre</p>
                  <div className="h-[100px] w-full bg-slate-100 rounded-md mt-4 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-slate-400" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Deuda Pública</CardTitle>
                  <CardDescription>Como porcentaje del PIB</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">98.3%</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-red-600 flex items-center">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      +1.7%
                    </span>{" "}
                    vs año anterior
                  </p>
                  <div className="h-[100px] w-full bg-slate-100 rounded-md mt-4 flex items-center justify-center">
                    <LineChart className="h-6 w-6 text-slate-400" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Índice de Producción Industrial</CardTitle>
                  <CardDescription>Variación interanual</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+3.2%</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-emerald-600 flex items-center">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      +0.8%
                    </span>{" "}
                    vs mes anterior
                  </p>
                  <div className="h-[100px] w-full bg-slate-100 rounded-md mt-4 flex items-center justify-center">
                    <Activity className="h-6 w-6 text-slate-400" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
