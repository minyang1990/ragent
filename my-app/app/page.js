export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          欢迎来到 Developers Digest
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          探索最新的开发技术、工具和最佳实践。与全球开发者社区一起成长。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            最新技术
          </h3>
          <p className="text-gray-600">
            了解前沿的开发技术和框架，保持技术栈的现代化。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            实用教程
          </h3>
          <p className="text-gray-600">
            从基础到高级的详细教程，帮助你掌握新技能。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            开发工具
          </h3>
          <p className="text-gray-600">
            发现能提高开发效率的工具和资源推荐。
          </p>
        </div>
      </div>

      <div className="text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
          开始探索
        </button>
      </div>
    </div>
  );
}
