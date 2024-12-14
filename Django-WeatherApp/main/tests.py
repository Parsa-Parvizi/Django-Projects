from django.test import TestCase


class WeatherTestCase(TestCase):
    def test_weather_api(self):
        # Test the weather API endpoint
        response = self.client.get('/weather/api/')
        self.assertEqual(response.status_code, 200)
        self.assertIn('weather', response.json())

    def test_weather_api_with_location(self):
        # Test the weather API endpoint with a location parameter
        response = self.client.get('/weather/api/', {'location': 'London'})
        self.assertEqual(response.status_code, 200)
        self.assertIn('weather', response.json())
        self.assertEqual(response.json()['location'], 'London')

    def test_weather_api_with_invalid_location(self):
        # Test the weather API endpoint with an invalid location parameter
        response = self.client.get(
            '/weather/api/', {'location': 'Invalid Location'})
        self.assertEqual(response.status_code, 200)
        self.assertIn('weather', response.json())
        self.assertEqual(response.json()['location'], 'Invalid Location')
        self.assertEqual(response.json()['error'], 'Invalid location')

    def test_weather_api_with_no_location(self):
        # Test the weather API endpoint with no location parameter
        response = self.client.get('/weather/api/')
        self.assertEqual(response.status_code, 200)
        self.assertIn('weather', response.json())
        self.assertEqual(response.json()['location'], 'Invalid location')
        self.assertEqual(response.json()['error'],
                         'Location parameter is required')

    def test_weather_api_with_valid_location(self):
        # Test the weather API endpoint with a valid location parameter
        response = self.client.get('/weather/api/', {'location': 'London'})
        self.assertEqual(response.status_code, 200)
        self.assertIn('weather', response.json())
        self.assertEqual(response.json()['location'], 'London')
        self.assertEqual(response.json()['error'], None)


class WeatherAPITestCase(TestCase):
    def test_weather_api_with_invalid_location(self):
        # Test the weather API endpoint with an invalid location parameter
        response = self.client.get(
            '/weather/api/', {'location': 'Invalid Location'})
        self.assertEqual(response.status_code, 200)
        self.assertIn('weather', response.json())
        self.assertEqual(response.json()['location'], 'Invalid Location')
        self.assertEqual(response.json()['error'],
                         'Location parameter is required')
        self.assertEqual(response.json()['weather'], None)
        self.assertEqual(response.json()['temperature'], None)
        self.assertEqual(response.json()['humidity'], None)
        self.assertEqual(response.json()['wind_speed'], None)
        self.assertEqual(response.json()['pressure'], None)
        self.assertEqual(response.json()['description'], None)
        self.assertEqual(response.json()['icon'], None)
        self.assertEqual(response.json()['last_updated'], None)
        self.assertEqual(response.json()['forecast'], None)
        self.assertEqual(response.json()['forecast_error'], None)
