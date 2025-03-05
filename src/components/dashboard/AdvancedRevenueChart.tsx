import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';

interface AdvancedRevenueChartProps {
  data: Array<{ 
    name: string; 
    revenue: number;
    target?: number;
    expenses?: number;
    profit?: number;
  }>;
}

export function AdvancedRevenueChart({ data }: AdvancedRevenueChartProps) {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
        <CardDescription>
          Monthly revenue performance for the current year
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="area">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="area">Area</TabsTrigger>
              <TabsTrigger value="bar">Bar</TabsTrigger>
              <TabsTrigger value="line">Line</TabsTrigger>
              <TabsTrigger value="composed">Combined</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="area" className="pl-2">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
                  </linearGradient>
                  {data[0].target && (
                    <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
                    </linearGradient>
                  )}
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis
                  dataKey="name"
                  className="text-xs"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis
                  className="text-xs"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    borderColor: 'hsl(var(--border))',
                    color: 'hsl(var(--card-foreground))',
                  }}
                  formatter={(value) => [`$${value}`, 'Revenue']}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(var(--chart-1))"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
                {data[0].target && (
                  <Area
                    type="monotone"
                    dataKey="target"
                    stroke="hsl(var(--chart-2))"
                    strokeDasharray="5 5"
                    fillOpacity={0.2}
                    fill="url(#colorTarget)"
                  />
                )}
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="bar" className="pl-2">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis
                  dataKey="name"
                  className="text-xs"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis
                  className="text-xs"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    borderColor: 'hsl(var(--border))',
                    color: 'hsl(var(--card-foreground))',
                  }}
                  formatter={(value) => [`$${value}`, 'Revenue']}
                />
                <Bar dataKey="revenue" fill="hsl(var(--chart-1))" />
                {data[0].target && (
                  <Bar dataKey="target" fill="hsl(var(--chart-2))" />
                )}
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="line" className="pl-2">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis
                  dataKey="name"
                  className="text-xs"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis
                  className="text-xs"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    borderColor: 'hsl(var(--border))',
                    color: 'hsl(var(--card-foreground))',
                  }}
                  formatter={(value) => [`$${value}`, 'Revenue']}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(var(--chart-1))" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                {data[0].target && (
                  <Line 
                    type="monotone" 
                    dataKey="target" 
                    stroke="hsl(var(--chart-2))" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ r: 4 }}
                  />
                )}
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="composed" className="pl-2">
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis
                  dataKey="name"
                  className="text-xs"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis
                  className="text-xs"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    borderColor: 'hsl(var(--border))',
                    color: 'hsl(var(--card-foreground))',
                  }}
                  formatter={(value, name) => {
                    return [`$${value}`, name.charAt(0).toUpperCase() + name.slice(1)];
                  }}
                />
                <Legend />
                <Bar dataKey="revenue" fill="hsl(var(--chart-1))" />
                {data[0].expenses && (
                  <Bar dataKey="expenses" fill="hsl(var(--chart-3))" />
                )}
                {data[0].profit && (
                  <Line 
                    type="monotone" 
                    dataKey="profit" 
                    stroke="hsl(var(--chart-2))" 
                    strokeWidth={2}
                  />
                )}
                {data[0].target && (
                  <Line 
                    type="monotone" 
                    dataKey="target" 
                    stroke="hsl(var(--chart-4))" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                  />
                )}
              </ComposedChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}