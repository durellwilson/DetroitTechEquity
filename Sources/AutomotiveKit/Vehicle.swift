import Foundation
import CoreLocation

/// Detroit Swift Community - AutomotiveKit
/// Core vehicle data structures and utilities for automotive applications

public struct Vehicle: Codable, Identifiable {
    public let id: UUID
    public let make: String
    public let model: String
    public let year: Int
    public let vin: String
    public var fuelType: FuelType
    public var location: CLLocationCoordinate2D?
    public var batteryLevel: Double? // For EVs, 0.0 to 1.0
    public var fuelLevel: Double? // For ICE vehicles, 0.0 to 1.0
    
    public init(
        id: UUID = UUID(),
        make: String,
        model: String,
        year: Int,
        vin: String,
        fuelType: FuelType,
        location: CLLocationCoordinate2D? = nil,
        batteryLevel: Double? = nil,
        fuelLevel: Double? = nil
    ) {
        self.id = id
        self.make = make
        self.model = model
        self.year = year
        self.vin = vin
        self.fuelType = fuelType
        self.location = location
        self.batteryLevel = batteryLevel
        self.fuelLevel = fuelLevel
    }
}

public enum FuelType: String, CaseIterable, Codable {
    case gasoline = "gasoline"
    case diesel = "diesel"
    case electric = "electric"
    case hybrid = "hybrid"
    case pluginHybrid = "plugin_hybrid"
    case hydrogen = "hydrogen"
    
    public var displayName: String {
        switch self {
        case .gasoline: return "Gasoline"
        case .diesel: return "Diesel"
        case .electric: return "Electric"
        case .hybrid: return "Hybrid"
        case .pluginHybrid: return "Plug-in Hybrid"
        case .hydrogen: return "Hydrogen"
        }
    }
    
    public var isElectric: Bool {
        return self == .electric || self == .hybrid || self == .pluginHybrid
    }
}

// MARK: - Detroit-specific vehicle utilities
public extension Vehicle {
    /// Check if vehicle qualifies for Detroit EV incentives
    var qualifiesForDetroitEVIncentive: Bool {
        return fuelType.isElectric && year >= 2020
    }
    
    /// Generate Detroit parking permit ID
    var detroitParkingPermitID: String {
        return "DET-\(make.prefix(3).uppercased())-\(String(vin.suffix(6)))"
    }
    
    /// Check if vehicle meets Detroit emissions standards
    var meetsDetroitEmissionsStandards: Bool {
        switch fuelType {
        case .electric, .hydrogen:
            return true
        case .hybrid, .pluginHybrid:
            return year >= 2015
        case .gasoline, .diesel:
            return year >= 2010
        }
    }
}
