// swift-tools-version: 5.9
// Detroit Swift Community - Advanced Automotive & AI Framework

import PackageDescription

let package = Package(
    name: "DetroitTechEquity",
    platforms: [
        .iOS(.v15),
        .macOS(.v12),
        .watchOS(.v8),
        .tvOS(.v15)
    ],
    products: [
        .library(name: "AutomotiveKit", targets: ["AutomotiveKit"]),
        .library(name: "MobilityFramework", targets: ["MobilityFramework"]),
        .library(name: "DetroitUtilities", targets: ["DetroitUtilities"]),
        .library(name: "AdvancedAutomotive", targets: ["AdvancedAutomotive"])
    ],
    dependencies: [
        .package(url: "https://github.com/apple/swift-algorithms", from: "1.0.0"),
        .package(url: "https://github.com/vapor/vapor.git", from: "4.0.0")
    ],
    targets: [
        .target(
            name: "AutomotiveKit",
            dependencies: [.product(name: "Algorithms", package: "swift-algorithms")],
            path: "Sources/AutomotiveKit"
        ),
        .target(
            name: "MobilityFramework",
            dependencies: ["AutomotiveKit"],
            path: "Sources/MobilityFramework"
        ),
        .target(
            name: "DetroitUtilities",
            dependencies: [.product(name: "Vapor", package: "vapor")],
            path: "Sources/DetroitUtilities"
        ),
        .target(
            name: "AdvancedAutomotive",
            dependencies: ["AutomotiveKit", "DetroitUtilities"],
            path: "Sources/AdvancedAutomotive"
        ),
        .testTarget(
            name: "DetroitTechEquityTests",
            dependencies: ["AutomotiveKit", "MobilityFramework", "DetroitUtilities", "AdvancedAutomotive"]
        )
    ]
)
