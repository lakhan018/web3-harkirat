import heapq

def best_first_search(graph, start, goal, heuristic):
    priority_queue = []
    heapq.heappush(priority_queue, (heuristic[start], start))  # (heuristic_value, node)
    visited = set()
    parent = {start: None}

    while priority_queue:
        _, current = heapq.heappop(priority_queue)

        if current in visited:
            continue
        visited.add(current)

        if current == goal:
            path = []
            while current is not None:
                path.append(current)
                current = parent[current]
            return path[::-1]  # Return reversed path from start to goal

        for neighbor, cost in graph[current]:
            if neighbor not in visited:
                heapq.heappush(priority_queue, (heuristic[neighbor], neighbor))
                parent[neighbor] = current

    return None  # If goal is not reachable

# Example usage
graph = {
    'A': [('B', 1), ('C', 2)],
    'B': [('D', 4), ('E', 2)],
    'C': [('F', 3)],
    'D': [],
    'E': [('G', 1)],
    'F': [('G', 5)],
    'G': []
}

heuristic = {
    'A': 6, 'B': 4, 'C': 4, 'D': 7, 'E': 2, 'F': 3, 'G': 0
}

start = 'A'
goal = 'G'
path = best_first_search(graph, start, goal, heuristic)
print("Best-First Search Path:", path)
