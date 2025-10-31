import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const route = searchParams.get('route');

  // Mock data - integrate with DetroitTransitKit Swift backend
  const mockData = {
    route: route || 'Unknown',
    buses: [
      { id: '1234', arrival: '5 min', destination: 'Downtown Detroit', lat: 42.3314, lng: -83.0458 },
      { id: '5678', arrival: '15 min', destination: 'Midtown', lat: 42.3584, lng: -83.0648 },
      { id: '9012', arrival: '25 min', destination: 'Dearborn', lat: 42.3223, lng: -83.1763 },
    ],
    stops: [
      { name: 'Campus Martius', id: 'CM001', routes: ['16', '23', '53'] },
      { name: 'Rosa Parks Transit Center', id: 'RP001', routes: ['4', '6', '16'] },
    ]
  };

  return NextResponse.json(mockData);
}
