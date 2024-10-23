"use client"

interface TechCardProps {
    tech: {
        name: string;
        description: string;
        icon: React.ElementType;
        color: string;
    };
}

const TechCard: React.FC<TechCardProps> = ({ tech }) => {
    return (
        <div className="tech-card">
            <div
                className="p-8 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-lg transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundColor: `${tech.color}10` }}
            >
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                    <div className="w-24 h-24 flex-shrink-0 bg-white rounded-full p-4 shadow-lg">
                        <tech.icon className="w-full h-full" />
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-3xl font-bold mb-4" style={{ color: tech.color }}>
                            {tech.name}
                        </h3>
                        <p className="text-xl text-gray-300 leading-relaxed">{tech.description}</p>
                    </div>
                </div>
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${tech.color.slice(
                            1
                        )}' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default TechCard;
