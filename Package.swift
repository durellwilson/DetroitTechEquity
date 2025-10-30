// swift-tools-version: 5.9
// Detroit Swift Community - Automotive Utilities Package

import PackageDescription

let package = Package(
    name: "DetroitSwiftCommunity",
    platforms: [
        .iOS(.v15),
        .macOS(.v12),
        .watchOS(.v8),
        .tvOS(.v15)
    ],
    products: [
        .library(
            name: "AutomotiveKit",
            targets: ["AutomotiveKit"]),
        .library(
            name: "MobilityFramework", 
            targets: ["MobilityFramework"]),
        .library(
            name: "DetroitUtilities",
            targets: ["DetroitUtilities"])
    ],
    dependencies: [
        .package(url: "https://github.com/apple/swift-algorithms", from: "1.0.0"),
        .package(url: "https://github.com/vapor/vapor.git", from: "4.0.0")
    ],
    targets: [
        .target(
            name: "AutomotiveKit",
            dependencies: [
                .product(name: "Algorithms", package: "swift-algorithms")
            ],
            path: "Sources/AutomotiveKit"
        ),
        .target(
            name: "MobilityFramework",
            dependencies: ["AutomotiveKit"],
            path: "Sources/MobilityFramework"
        ),
        .target(
            name: "DetroitUtilities",
            dependencies: [
                .product(name: "Vapor", package: "vapor")
            ],
            path: "Sources/DetroitUtilities"
        ),
        .testTarget(
            name: "DetroitSwiftCommunityTests",
            dependencies: [
                "AutomotiveKit",
                "MobilityFramework", 
                "DetroitUtilities"
            ]
        )
    ]
)
