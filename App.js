import React from 'react';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Setup from "./setup";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        logErrorToMyService(error, info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return this.props.fallback;
        }

        return this.props.children;
    }
}

export default function App() {
    const queryClient = new QueryClient()
    return (
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
            <SafeAreaProvider>
                <QueryClientProvider client={queryClient}>
                    <Setup />
                </QueryClientProvider>
            </SafeAreaProvider>
        </ErrorBoundary>
    );
}