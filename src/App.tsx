import React, { useState } from 'react';
import { Settings, Sprout, Crop as Drop, Thermometer, Activity, Clock, Wind, Cloud, AlertCircle, Droplets } from 'lucide-react';
import { indianStates, soilTypes, cropRecommendations, governmentSchemes } from './data';

function App() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedSoil, setSelectedSoil] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);

  const getRecommendations = () => {
    return cropRecommendations[selectedSoil] || null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sprout className="h-6 w-6 text-green-600" />
            <h1 className="text-xl font-semibold text-gray-900">Smart Farming Tool</h1>
          </div>
          <Settings className="h-6 w-6 text-gray-500" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Field Overview */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Field Overview</h2>
          <p className="text-gray-600 mb-6">Real-time monitoring and insights</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Soil Moisture</h3>
                <Drop className="h-5 w-5 text-blue-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900">45%</div>
              <p className="text-sm text-gray-500">Optimal range: 40-60%</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Soil Temperature</h3>
                <Thermometer className="h-5 w-5 text-red-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900">22°C</div>
              <p className="text-sm text-gray-500">Optimal range: 20-25°C</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Soil pH</h3>
                <Activity className="h-5 w-5 text-purple-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900">6.5</div>
              <p className="text-sm text-gray-500">Optimal range: 6-7</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Last Updated</h3>
                <Clock className="h-5 w-5 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900">5:50:56 PM</div>
              <p className="text-sm text-gray-500">Real-time sensor data</p>
            </div>
          </div>
        </section>

        {/* Weather and Irrigation Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Weather Forecast</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Thermometer className="h-5 w-5 text-red-500" />
                <div>
                  <div className="text-sm text-gray-500">Temperature</div>
                  <div className="font-semibold">28°C</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Droplets className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="text-sm text-gray-500">Humidity</div>
                  <div className="font-semibold">65%</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Wind className="h-5 w-5 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">Wind Speed</div>
                  <div className="font-semibold">12 km/h</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Cloud className="h-5 w-5 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">Cloud Cover</div>
                  <div className="font-semibold">30%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Irrigation Status</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <div className="text-gray-500">Next Scheduled Irrigation</div>
                <div className="font-semibold">Today, 6:00 PM</div>
              </div>
              <div className="flex justify-between">
                <div className="text-gray-500">Duration</div>
                <div className="font-semibold">45 minutes</div>
              </div>
              <div className="flex justify-between">
                <div className="text-gray-500">Water Usage Today</div>
                <div className="font-semibold">2.5 liters/m²</div>
              </div>
              <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
                Adjust Schedule
              </button>
            </div>
          </div>
        </div>

        {/* Crop Recommendation Form */}
        <section className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Crop Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select State
              </label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Choose a state</option>
                {indianStates.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Soil Type
              </label>
              <select
                value={selectedSoil}
                onChange={(e) => setSelectedSoil(e.target.value)}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Choose soil type</option>
                {soilTypes.map((soil) => (
                  <option key={soil} value={soil}>{soil}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            onClick={() => setShowRecommendations(true)}
            disabled={!selectedState || !selectedSoil}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-400"
          >
            Get Recommendations
          </button>
        </section>

        {/* Recommendations Display */}
        {showRecommendations && selectedSoil && (
          <section className="bg-white rounded-lg shadow p-6 mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Recommended Crops</h3>
            <div className="space-y-6">
              {getRecommendations()?.map((rec, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <h4 className="font-medium text-gray-900 mb-2">{rec.season}</h4>
                  <div className="space-y-2">
                    <p><span className="font-medium">Primary Crop:</span> {rec.primaryCrop}</p>
                    <p><span className="font-medium">Rotation Crop:</span> {rec.rotationCrop}</p>
                    <p className="text-sm text-gray-600">{rec.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Government Schemes */}
        <section className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Government Schemes</h3>
          <div className="space-y-4">
            {governmentSchemes.map((scheme, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">{scheme.name}</h4>
                    <p className="text-sm text-gray-600">{scheme.description}</p>
                    {scheme.link && (
                      <a
                        href={scheme.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-green-600 hover:text-green-700"
                      >
                        Learn more →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rainwater Harvesting Techniques */}
        <section className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Rainwater Harvesting Techniques</h3>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h4 className="font-medium text-gray-900 mb-2">Rooftop Harvesting</h4>
              <p className="text-sm text-gray-600">
                Install gutters and downspouts to collect rainwater from rooftops. Direct water to storage tanks or ground recharge pits.
                Capacity calculation: 1 square meter of roof area × annual rainfall in mm = liters of water that can be harvested
              </p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-medium text-gray-900 mb-2">Surface Runoff Harvesting</h4>
              <p className="text-sm text-gray-600">
                Create channels and bunds to direct surface water to collection ponds or recharge structures.
                Maintain proper gradient and use filter materials to prevent soil erosion.
              </p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-medium text-gray-900 mb-2">Recharge Pits</h4>
              <p className="text-sm text-gray-600">
                Dig pits filled with gravel and sand to filter and recharge groundwater.
                Recommended size: 1-2 meters wide, 2-3 meters deep. Include filter media layers.
              </p>
            </div>
          </div>
        </section>

        {/* Organic Manure Preparation */}
        <section className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Organic Manure Preparation</h3>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h4 className="font-medium text-gray-900 mb-2">Compost Making</h4>
              <p className="text-sm text-gray-600">
                1. Layer green waste (kitchen scraps, fresh leaves) and brown waste (dry leaves, straw)
                2. Maintain moisture level similar to a squeezed sponge
                3. Turn pile every 2 weeks
                4. Ready in 2-3 months when dark and crumbly
              </p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-medium text-gray-900 mb-2">Vermicomposting</h4>
              <p className="text-sm text-gray-600">
                1. Create bedding with coconut coir or straw
                2. Add earthworms (Eisenia fetida recommended)
                3. Feed with organic waste regularly
                4. Harvest every 45-60 days
                5. Keep moisture at 60-70%
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Green Manure</h4>
              <p className="text-sm text-gray-600">
                1. Grow leguminous crops (dhaincha, sunhemp)
                2. Allow 6-8 weeks of growth
                3. Plow back into soil before flowering
                4. Wait 1-2 weeks before planting main crop
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;