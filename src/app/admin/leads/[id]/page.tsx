'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

interface Lead {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    company: string;
    job_title: string;
    industry: string;
    status: string;
    priority: string;
    created_at: string;
}

interface LeadMessage {
    id: number;
    subject: string;
    message: string;
    created_at: string;
}

interface LeadActivity {
    id: number;
    type: string;
    description: string;
    created_at: string;
    created_by: string;
}

export default function LeadDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [lead, setLead] = useState<Lead | null>(null);
    const [messages, setMessages] = useState<LeadMessage[]>([]);
    const [activities, setActivities] = useState<LeadActivity[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        fetchLeadData();
    }, [params.id]);

    const fetchLeadData = async () => {
        try {
            const [leadResponse, messagesResponse, activitiesResponse] = await Promise.all([
                fetch(`/api/admin/leads/${params.id}`),
                fetch(`/api/admin/leads/${params.id}/messages`),
                fetch(`/api/admin/leads/${params.id}/activities`),
            ]);

            const [leadData, messagesData, activitiesData] = await Promise.all([
                leadResponse.json(),
                messagesResponse.json(),
                activitiesResponse.json(),
            ]);

            setLead(leadData);
            setMessages(messagesData.messages);
            setActivities(activitiesData.activities);
        } catch (error) {
            console.error('Error fetching lead data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const updateLeadStatus = async (status: string) => {
        setIsUpdating(true);
        try {
            const response = await fetch(`/api/admin/leads/${params.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status }),
            });

            if (!response.ok) {
                throw new Error('Failed to update lead status');
            }

            const updatedLead = await response.json();
            setLead(updatedLead);
            fetchLeadData(); // Refresh activities
        } catch (error) {
            console.error('Error updating lead status:', error);
        } finally {
            setIsUpdating(false);
        }
    };

    const updateLeadPriority = async (priority: string) => {
        setIsUpdating(true);
        try {
            const response = await fetch(`/api/admin/leads/${params.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ priority }),
            });

            if (!response.ok) {
                throw new Error('Failed to update lead priority');
            }

            const updatedLead = await response.json();
            setLead(updatedLead);
            fetchLeadData(); // Refresh activities
        } catch (error) {
            console.error('Error updating lead priority:', error);
        } finally {
            setIsUpdating(false);
        }
    };

    if (isLoading) {
        return (
            <div className="animate-pulse">
                <div className="h-32 bg-gray-200 rounded-lg mb-6"></div>
                <div className="h-64 bg-gray-200 rounded-lg"></div>
            </div>
        );
    }

    if (!lead) {
        return (
            <div className="text-center py-12">
                <h2 className="text-2xl font-semibold text-gray-900">Lead not found</h2>
                <button
                    onClick={() => router.push('/admin/leads')}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Back to Leads
                </button>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-6">
                <button
                    onClick={() => router.push('/admin/leads')}
                    className="mb-4 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    ← Back to Leads
                </button>
                <h1 className="text-2xl font-semibold text-gray-900">
                    {lead.first_name} {lead.last_name}
                </h1>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Lead Information */}
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Lead Information
                        </h3>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Email</dt>
                                <dd className="mt-1 text-sm text-gray-900">{lead.email}</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                <dd className="mt-1 text-sm text-gray-900">{lead.phone || 'N/A'}</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Company</dt>
                                <dd className="mt-1 text-sm text-gray-900">{lead.company || 'N/A'}</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Job Title</dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                    {lead.job_title || 'N/A'}
                                </dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Industry</dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                    {lead.industry || 'N/A'}
                                </dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Created</dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                    {new Date(lead.created_at).toLocaleDateString()}
                                </dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Status</dt>
                                <dd className="mt-1">
                                    <select
                                        value={lead.status}
                                        onChange={(e) => updateLeadStatus(e.target.value)}
                                        disabled={isUpdating}
                                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                    >
                                        <option value="new">New</option>
                                        <option value="contacted">Contacted</option>
                                        <option value="qualified">Qualified</option>
                                        <option value="proposal">Proposal</option>
                                        <option value="negotiation">Negotiation</option>
                                        <option value="closed_won">Closed Won</option>
                                        <option value="closed_lost">Closed Lost</option>
                                    </select>
                                </dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Priority</dt>
                                <dd className="mt-1">
                                    <select
                                        value={lead.priority}
                                        onChange={(e) => updateLeadPriority(e.target.value)}
                                        disabled={isUpdating}
                                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                    >
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                        <option value="urgent">Urgent</option>
                                    </select>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>

                {/* Messages */}
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Messages</h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <ul role="list" className="divide-y divide-gray-200">
                            {messages.map((message) => (
                                <li key={message.id} className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-sm font-medium text-blue-600">
                                            {message.subject}
                                        </h4>
                                        <p className="text-sm text-gray-500">
                                            {new Date(message.created_at).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-600">{message.message}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Activity History */}
                <div className="lg:col-span-2 bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Activity History
                        </h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <ul role="list" className="divide-y divide-gray-200">
                            {activities.map((activity) => (
                                <li key={activity.id} className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <span
                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                    activity.type === 'status_change'
                                                        ? 'bg-blue-100 text-blue-800'
                                                        : 'bg-green-100 text-green-800'
                                                }`}
                                            >
                                                {activity.type.replace('_', ' ')}
                                            </span>
                                            <p className="ml-2 text-sm text-gray-500">
                                                by {activity.created_by}
                                            </p>
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            {new Date(activity.created_at).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-600">
                                        {activity.description}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
} 