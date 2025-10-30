import Foundation

/// Detroit's revolutionary AI-Human collaboration framework
/// Ensures AI amplifies human creativity while maintaining equity
public class AIHumanCollaboration {
    
    public enum CollaborationMode {
        case humanLed        // Human directs, AI assists
        case aiAugmented     // AI suggests, human decides
        case pairProgramming // Real-time collaboration
        case reviewPartner   // AI reviews human code
    }
    
    public struct EquityMetrics {
        public let humanContribution: Double    // 0.0 to 1.0
        public let aiContribution: Double       // 0.0 to 1.0
        public let communityBenefit: Double     // Economic impact score
        public let biasScore: Double            // Lower is better
        
        public var isEquitable: Bool {
            return humanContribution >= 0.5 && biasScore < 0.1
        }
    }
    
    public struct CollaborationSession {
        public let id: UUID
        public let mode: CollaborationMode
        public let humanDeveloper: String
        public let aiAssistant: String
        public let startTime: Date
        public var endTime: Date?
        public var linesOfCode: Int = 0
        public var problemsSolved: Int = 0
        public var equityMetrics: EquityMetrics?
        
        public init(mode: CollaborationMode, humanDeveloper: String, aiAssistant: String) {
            self.id = UUID()
            self.mode = mode
            self.humanDeveloper = humanDeveloper
            self.aiAssistant = aiAssistant
            self.startTime = Date()
        }
    }
    
    private var activeSessions: [UUID: CollaborationSession] = [:]
    
    public init() {}
    
    /// Start a new AI-human collaboration session
    public func startSession(mode: CollaborationMode, 
                           humanDeveloper: String,
                           aiAssistant: String = "Detroit Coding Agent") -> UUID {
        let session = CollaborationSession(
            mode: mode,
            humanDeveloper: humanDeveloper,
            aiAssistant: aiAssistant
        )
        
        activeSessions[session.id] = session
        return session.id
    }
    
    /// End collaboration session and calculate equity metrics
    public func endSession(_ sessionId: UUID, 
                          linesOfCode: Int,
                          problemsSolved: Int) -> EquityMetrics? {
        guard var session = activeSessions[sessionId] else { return nil }
        
        session.endTime = Date()
        session.linesOfCode = linesOfCode
        session.problemsSolved = problemsSolved
        
        // Calculate equity metrics based on Detroit values
        let equityMetrics = calculateEquityMetrics(for: session)
        session.equityMetrics = equityMetrics
        
        activeSessions[sessionId] = session
        return equityMetrics
    }
    
    private func calculateEquityMetrics(for session: CollaborationSession) -> EquityMetrics {
        // Detroit-specific equity calculation
        let humanContribution: Double
        let aiContribution: Double
        
        switch session.mode {
        case .humanLed:
            humanContribution = 0.8
            aiContribution = 0.2
        case .aiAugmented:
            humanContribution = 0.6
            aiContribution = 0.4
        case .pairProgramming:
            humanContribution = 0.5
            aiContribution = 0.5
        case .reviewPartner:
            humanContribution = 0.7
            aiContribution = 0.3
        }
        
        // Community benefit based on problems solved and code quality
        let communityBenefit = Double(session.problemsSolved) * 0.1 + 
                              Double(session.linesOfCode) * 0.001
        
        // Bias score (simulated - would use real bias detection in production)
        let biasScore = 0.05 // Low bias score for Detroit equity framework
        
        return EquityMetrics(
            humanContribution: humanContribution,
            aiContribution: aiContribution,
            communityBenefit: communityBenefit,
            biasScore: biasScore
        )
    }
    
    /// Get community impact report
    public func getCommunityImpactReport() -> CommunityImpactReport {
        let completedSessions = activeSessions.values.filter { $0.endTime != nil }
        
        let totalLinesOfCode = completedSessions.reduce(0) { $0 + $1.linesOfCode }
        let totalProblemsSolved = completedSessions.reduce(0) { $0 + $1.problemsSolved }
        let averageEquity = completedSessions.compactMap { $0.equityMetrics?.humanContribution }
                                           .reduce(0, +) / Double(completedSessions.count)
        
        return CommunityImpactReport(
            totalSessions: completedSessions.count,
            totalLinesOfCode: totalLinesOfCode,
            totalProblemsSolved: totalProblemsSolved,
            averageHumanContribution: averageEquity,
            estimatedEconomicImpact: Double(totalProblemsSolved) * 1000.0 // $1K per problem solved
        )
    }
}

public struct CommunityImpactReport {
    public let totalSessions: Int
    public let totalLinesOfCode: Int
    public let totalProblemsSolved: Int
    public let averageHumanContribution: Double
    public let estimatedEconomicImpact: Double
    
    public var impactSummary: String {
        return """
        Detroit AI-Human Collaboration Impact:
        • \(totalSessions) collaboration sessions completed
        • \(totalLinesOfCode) lines of equitable code generated
        • \(totalProblemsSolved) community problems solved
        • \(String(format: "%.1f", averageHumanContribution * 100))% average human contribution
        • $\(String(format: "%.0f", estimatedEconomicImpact)) estimated economic impact
        """
    }
}
