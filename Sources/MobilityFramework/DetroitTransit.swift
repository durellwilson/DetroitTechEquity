import Foundation
import CoreLocation

/// Detroit Department of Transportation (DDOT) integration
/// Real-time transit data and routing for Detroit public transportation

public struct DetroitTransit {
    
    public static let shared = DetroitTransit()
    
    private init() {}
    
    /// DDOT bus routes in Detroit
    public enum BusRoute: String, CaseIterable {
        case route3 = "3-Grand River"
        case route4 = "4-Woodward"
        case route6 = "6-Gratiot"
        case route9 = "9-Jefferson"
        case route16 = "16-Dexter"
        case route23 = "23-Fenkell"
        case route29 = "29-Linwood"
        case route32 = "32-McNichols"
        
        public var displayName: String {
            return rawValue
        }
        
        public var color: String {
            switch self {
            case .route3: return "#FF6B35" // Orange
            case .route4: return "#004225" // Green
            case .route6: return "#1E3A8A" // Blue
            case .route9: return "#7C2D12" // Brown
            case .route16: return "#BE123C" // Red
            case .route23: return "#6B21A8" // Purple
            case .route29: return "#0F766E" // Teal
            case .route32: return "#A16207" // Yellow
            }
        }
    }
    
    public struct BusStop: Identifiable, Codable {
        public let id: String
        public let name: String
        public let coordinate: CLLocationCoordinate2D
        public let routes: [BusRoute]
        public let amenities: [Amenity]
        
        public enum Amenity: String, CaseIterable, Codable {
            case shelter = "shelter"
            case bench = "bench"
            case lighting = "lighting"
            case accessibility = "accessibility"
            case realTimeDisplay = "real_time_display"
        }
    }
    
    public struct BusArrival: Codable {
        public let route: BusRoute
        public let stopId: String
        public let estimatedArrival: Date
        public let vehicleId: String
        public let isDelayed: Bool
        
        public var minutesUntilArrival: Int {
            let interval = estimatedArrival.timeIntervalSinceNow
            return max(0, Int(interval / 60))
        }
    }
    
    /// Get nearby bus stops within specified radius
    public func nearbyStops(
        from location: CLLocationCoordinate2D,
        radius: CLLocationDistance = 500
    ) async throws -> [BusStop] {
        // Implementation would connect to DDOT API
        // For now, return sample data
        return sampleBusStops.filter { stop in
            let stopLocation = CLLocation(
                latitude: stop.coordinate.latitude,
                longitude: stop.coordinate.longitude
            )
            let userLocation = CLLocation(
                latitude: location.latitude,
                longitude: location.longitude
            )
            return stopLocation.distance(from: userLocation) <= radius
        }
    }
    
    /// Get real-time arrivals for a specific stop
    public func arrivals(for stopId: String) async throws -> [BusArrival] {
        // Implementation would connect to DDOT real-time API
        return sampleArrivals.filter { $0.stopId == stopId }
    }
    
    // MARK: - Sample Data (replace with real API calls)
    private let sampleBusStops: [BusStop] = [
        BusStop(
            id: "1001",
            name: "Campus Martius",
            coordinate: CLLocationCoordinate2D(latitude: 42.3314, longitude: -83.0458),
            routes: [.route3, .route4, .route6],
            amenities: [.shelter, .bench, .lighting, .accessibility, .realTimeDisplay]
        ),
        BusStop(
            id: "1002", 
            name: "Hart Plaza",
            coordinate: CLLocationCoordinate2D(latitude: 42.3298, longitude: -83.0458),
            routes: [.route9],
            amenities: [.bench, .lighting]
        )
    ]
    
    private let sampleArrivals: [BusArrival] = [
        BusArrival(
            route: .route4,
            stopId: "1001",
            estimatedArrival: Date().addingTimeInterval(300), // 5 minutes
            vehicleId: "4001",
            isDelayed: false
        ),
        BusArrival(
            route: .route3,
            stopId: "1001", 
            estimatedArrival: Date().addingTimeInterval(720), // 12 minutes
            vehicleId: "3005",
            isDelayed: true
        )
    ]
}
