import { Behaviour } from "@needle-tools/engine";

export class URLContext extends Behaviour {
    public setSearchParam(key: string, value: string) {
        const url = new URL(window.location.href);
        url.searchParams.set(key, value);
        
        // Update the URL without reloading the page
        window.history.replaceState({}, '', url.toString());
        
        console.log(`Set ${key}=${value} in URL`);
    }

    public getSearchParam(key: string) {
        const url = new URL(window.location.href);
        return url.searchParams.get(key);
    }

    public removeSearchParam(key: string) {
        const url = new URL(window.location.href);
        url.searchParams.delete(key);
        
        window.history.replaceState({}, '', url.toString());
        
        console.log(`Removed ${key} from URL`);
    }

    public clearSearchParams() {
        const url = new URL(window.location.href);
        url.search = "";
        
        window.history.replaceState({}, '', url.toString());
        
        console.log(`Cleared search params from URL`);
    }

    public getPathElement(index: number) {
        const url = new URL(window.location.href);
        console.log(url.pathname.split("/"))
        return url.pathname.split("/")[index];
    }

    public setPathElement(index: number, value: string) {
        const url = new URL(window.location.href);
        url.pathname = url.pathname.split("/").slice(0, index).join("/") + "/" + value;
        
        // Update the URL without reloading the page
        window.history.replaceState({}, '', url.toString());
        
        console.log(`Set ${value} in URL`);
    }
}