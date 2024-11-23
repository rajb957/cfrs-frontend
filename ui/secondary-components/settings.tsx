'use client'

import { useState } from "react"
import { Button } from "@/ui/components/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/components/select"
import { Switch } from "@/ui/components/switch"
import { Label } from "@/ui/components/label"
import { Slider } from "@/ui/components/slider"

export default function SettingsPanel() {
  const [recommendationType, setRecommendationType] = useState("content-based")
  const [darkMode, setDarkMode] = useState(false)
  const [columnCount, setColumnCount] = useState(2)

  return (
    <div className="p-6 space-y-6 bg-background text-foreground">
      <h2 className="text-2xl font-bold mb-4">Recommendation Settings</h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="recommendation-type">Recommendation Type</Label>
          <Select value={recommendationType} onValueChange={setRecommendationType}>
            <SelectTrigger id="recommendation-type">
              <SelectValue placeholder="Select recommendation type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="content-based">Content-based</SelectItem>
              <SelectItem value="collaborative">Collaborative Filtering</SelectItem>
              <SelectItem value="hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
          <Label htmlFor="dark-mode">Dark Mode</Label>
        </div>

        <div className="space-y-2">
          <Label htmlFor="column-count">Column Count</Label>
          <Slider
            id="column-count"
            min={1}
            max={4}
            step={1}
            value={[columnCount]}
            onValueChange={(value) => setColumnCount(value[0])}
          />
          <div className="text-sm text-muted-foreground">Current: {columnCount} columns</div>
        </div>
      </div>

      <Button className="w-full">Apply Settings</Button>
    </div>
  )
}