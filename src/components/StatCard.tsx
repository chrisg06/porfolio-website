import LoadingSpinner from "@/components/LoadingSpinner";
import NumberTicker from "@/components/magicui/number-ticker";

interface StatCardProps {
  title: string;
  value: number;
  valueUnit?: string;
  loading: boolean;
  subtext: string;
}

export default function StatCard({ title, value = 0, subtext, loading, valueUnit = '' }: StatCardProps) {
  return (
    <div className="relative rounded-xl border-gray-800 border shadow-lg text-center py-2 my-4 w-64">
      <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] rounded-xl"></div>
      <div className="relative z-10 m-4 flex flex-col items-center justify-center h-full">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-2xl font-semibold">
            {loading ? (
              <LoadingSpinner />
            ) : (
                <div>
                    <NumberTicker value={value} />
                    <span>{valueUnit}</span>
                </div>
              
            )}
          </div>
          <p className="mt-2 break-words whitespace-normal text-sm text-wrap">{subtext}</p>
        </div>
      </div>
    </div>
  );
}
